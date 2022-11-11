export async function LoginScreenAdmin() {
  await page.goto('http://localhost:3000/management/login', { waitUntil: 'load' });
  await page.waitForSelector('#login');
  await page.type('#login_email', 'vietnam.system');
  await page.type('#login_password', '1111111');
  await page.click('button[type=submit]');
}
