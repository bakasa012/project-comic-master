import path from 'path';

describe('Login form', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/login', { waitUntil: 'load' });
  });
  it('Init login screen', async () => {
    await page.waitForSelector('#login_form_antd');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/init.login.jpg') });
  });

  it('Validate label login screen', async () => {
    await page.waitForSelector('#login_form_antd');

    // get label username && password
    const usernameLabel = await page.evaluate(() => {
      const inputField = document.getElementById('login_form_antd_username') as HTMLInputElement;
      return inputField.placeholder;
    });
    const passwordLabel = await page.evaluate(() => {
      const inputField = document.getElementById('login_form_antd_password') as HTMLInputElement;
      return inputField.placeholder;
    });
    expect(usernameLabel).toContain('Username');
    expect(passwordLabel).toContain('Password');
  });

  it('Username input: Validate input username login screen', async () => {
    await page.waitForSelector('#login_form_antd');
    await page.click('.login-btn-custom-antd');
    await page.waitForSelector('.ant-form-item-explain-error');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/empty.username.input.login.jpg') });
    const dataList = await page.$$eval('.ant-form-item-explain-error', (e) => e.map((v) => v.textContent));
    expect(dataList).toContain('Please input your username!');
  });

  it("Username input: Can't enter more than 20 characters", async () => {
    await page.waitForSelector('#login_form_antd');
    await page.type('#login_form_antd_username', 'aaaaaaaaaaaaaaaaaaaaa');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/maxlength.username.input.login.jpg') });
    const messages = await page.$$eval('.ant-form-item-explain-error', (e) => e.map((v) => v.textContent));
    expect(messages).toContain("Can't enter more than 20 characters");
  });
  it('Username input: Input && clear all characters', async () => {
    await page.waitForSelector('#login_form_antd');
    await page.evaluate(() => {
      const input = document.getElementById('login_form_antd_username') as HTMLInputElement;
      input.value = '';
    });
    await page.type('#login_form_antd_username', 'a');
    await page.keyboard.down('Backspace');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/clear.username.input.login.jpg') });
    const messages = await page.$$eval('.ant-form-item-explain-error', (e) => e.map((v) => v.textContent));
    expect(messages).toContain('Please input your username!');
  });

  it("Password input: Can't enter more than 20 characters", async () => {
    await page.waitForSelector('#login_form_antd');
    await page.type('#login_form_antd_password', 'aaaaaaaaaaaaaaaaaaaaa');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/maxlength.username.input.login.jpg') });
    const messages = await page.$$eval('.ant-form-item-explain-error', (e) => e.map((v) => v.textContent));
    expect(messages).toContain("Can't enter more than 20 characters");

    // clear password input
    await page.evaluate(() => {
      const input = document.getElementById('login_form_antd_password') as HTMLInputElement;
      input.value = '';
    });
    await page.type('#login_form_antd_password', 'a');
    await page.keyboard.down('Backspace');
  });

  it('Login successfully', async () => {
    await page.waitForSelector('#login_form_antd');
    // clear username && password input
    await page.type('#login_form_antd_username', 'user1');
    await page.type('#login_form_antd_password', 'password');
    await page.click('.login-btn-custom-antd');

    await page.waitForSelector('.login-message-custom-antd');

    await page.screenshot({ path: path.resolve(__dirname, './screenshots/login.success.screen.login.jpg') });

    const messages = await page.$eval('.login-message-custom-antd > div', (e) => e.textContent);
    expect(messages).toContain('Login successfully');
  });
});
