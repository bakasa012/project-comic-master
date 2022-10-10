import path from 'path';

describe('App.tsx', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  it('navigates to the about page', async () => {
    await page.waitForSelector('.App-welcome-text');
    const text = await page.$eval('.App-welcome-text', (e) => e.textContent);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/AppTsx.png') });
    expect(text).toContain('Edit src/App.tsx and save to reload.');
  });
  //   afterAll(() => browser.close());
});
