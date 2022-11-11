import path from 'path';
import { LoginScreenAdmin } from '../common/LoginScreenAdmin';

describe('Login daily report system', () => {
  beforeAll(async () => {
    await LoginScreenAdmin();
    await page.goto('http://localhost:3000/management/synthesize-report', { waitUntil: 'load' });
  });
  it('Init login screen', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/init.syn-report.jpg') });
  });

  it('Case 1 : Combo-box 課名 - Default value', async () => {
    await page.waitForSelector('#department_selector');
    const getOptionDefault = await page.$eval(
      '.ant-select-selector > .ant-select-selection-item',
      (e) => e.textContent,
    );
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case1.syn-report.jpg') });
    expect(getOptionDefault).toEqual('すべて');
  });

  it('Case 2 : Combo-box 課名 - Select an option', async () => {
    await page.waitForSelector('#department_selector');
    await page.click('#department_selector');
    await page.$$eval('.ant-select-item-option-content', (e: any) => e[1]?.click());
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case2.syn-report.jpg') });
  });
  it('Case 3 : Combo-box 課名 - Input value then select option', async () => {
    await page.waitForSelector('#department_selector');
    await page.click('#department_selector');
    await page.type('#department_selector', 'D&R');
    await page.keyboard.down('Enter');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case3.syn-report.jpg') });
  });
  it('Case 4 : Combo-box 課名 - The inputed value is not a part of any department name in the option list', async () => {
    await page.waitForSelector('#department_selector');
    await page.click('#department_selector');
    await page.type('#department_selector', 'D&R____');
    await page.waitForSelector('.ant-empty-description');
    const textEmpty = await page.$eval('.ant-empty-description', (e) => e.textContent);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case4.syn-report.jpg') });
    expect(textEmpty).toEqual('データがありません');
  });
  it('Case 4 : Check-box 雇用形態 - Default value', async () => {
    await page.waitForSelector('#syn_report_form');
    const textFulltimeEmployee = await page.$eval('#fulltime_employee', (e) => e.textContent);
    const textDispatchEmployee = await page.$eval('#dispatch_employee', (e) => e.textContent);
    const textParttimeEmployee = await page.$eval('#parttime_employee', (e) => e.textContent);
    expect(textFulltimeEmployee).toEqual('正社員');
    expect(textDispatchEmployee).toEqual('派遣');
    expect(textParttimeEmployee).toEqual('PA');
  });

  it('Case 5 : Check-box 雇用形態 - Check/uncheck any option', async () => {
    await page.waitForSelector('#syn_report_form');
  });
});
