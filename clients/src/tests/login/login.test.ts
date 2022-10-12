import path from 'path';

describe('Login form', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/', { waitUntil: 'load' });
  });
  it('Init login screen', async () => {
    await page.waitForSelector('.form-antd-custom');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/init.login.png') });
  });

  it('Validate label login screen', async () => {
    await page.waitForSelector('.form-antd-custom');

    // get label username && password
    const usernameLabel = await page.$eval('.username-label-antd > div > div > label', (e) => e.textContent);
    const passwordLabel = await page.$eval('.password-label-antd > div > div > label', (e) => e.textContent);
    expect(usernameLabel).toContain('Username');
    expect(passwordLabel).toContain('Password');
  });

  it('Validate input user login screen', async () => {
    await page.waitForSelector('.form-antd-custom');
    await page.click('.btn-submit-antd-custom');
    await page.waitForSelector('.ant-form-item-explain-error');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/empty.input.message.login.png') });
    const dataList = await page.$$eval('.ant-form-item-explain-error', (e) => e.map((v) => v.textContent));
    expect(dataList).toContain('Please input your username!');
  });

  it("Can't enter more than 20 characters", async () => {
    await page.waitForSelector('.form-antd-custom');
    await page.type('#basic_form_username', 'aaaaaaaaaaaaaaaaaaaaa');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/maxlength.input.message.login.png') });
    const messages = await page.$$eval('.ant-form-item-explain-error', (e) => e.map((v) => v.textContent));
    expect(messages).toContain("Can't enter more than 20 characters");
  });
  it('Input && clear all characters', async () => {
    await page.waitForSelector('.form-antd-custom');
    await page.evaluate(() => {
      const input = document.getElementById('basic_form_username') as HTMLInputElement;
      input.value = '';
    });
    await page.type('#basic_form_username', 'a');
    await page.keyboard.down('Backspace');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/input.clear.message.login.png') });
    const messages = await page.$$eval('.ant-form-item-explain-error', (e) => e.map((v) => v.textContent));
    expect(messages).toContain('Please input your username!');
  });
});