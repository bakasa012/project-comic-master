import path from 'path';

describe('/ (Home Page)', () => {
  beforeAll(async () => {
    // await page.setViewport({ width: 1440, height: 768 });
    await page.goto('https://google.com');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/google.co.uk.png') });
  }, 5000);

  it('should load without error', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('google');
  });
});
