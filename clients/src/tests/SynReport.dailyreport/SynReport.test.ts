import moment from 'moment';
import path from 'path';
import {
  CheckedRadioBoxByElementId,
  ClearTextInputByElementId,
  UnCheckedRadioBoxByElementId,
} from '../common/ClearTextInput';
import { DelayFunction } from '../common/DelayFunction';
import { LoginScreenAdmin } from '../common/LoginScreenAdmin';
import { CreateCDPSession, NETWORK_PRESETS } from '../common/ModifyNetwork';

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
    await page.keyboard.press('Enter');
  });
  it('Case 5 : Check-box 雇用形態 - Default value', async () => {
    await page.waitForSelector('#syn_report_form');
    const textFulltimeEmployee = await page.$eval('#fulltime_employee', (e) => e.textContent);
    const textDispatchEmployee = await page.$eval('#dispatch_employee', (e) => e.textContent);
    const textParttimeEmployee = await page.$eval('#parttime_employee', (e) => e.textContent);
    expect(textFulltimeEmployee).toEqual('正社員');
    expect(textDispatchEmployee).toEqual('派遣');
    expect(textParttimeEmployee).toEqual('PA');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case5.syn-report.jpg') });
  });

  it('Case 6 : Check-box 雇用形態 - Check/uncheck any option', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#fulltime_employee_input');
    await page.click('#dispatch_employee_input');
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case6.syn-report.jpg') });
  });

  it('Case 7 : Check-box 雇用形態 - Unchecked all options', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#parttime_employee_input');
    const messages = await page.$$eval('.ant-form-item-explain-error', (e) => e.map((v) => v.textContent));
    expect(messages).toContain('雇用形態を選択してください。');
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case7.syn-report.jpg') });
  });

  it('Case 8 : Check-box 区分 - Default value', async () => {
    await page.reload();
    await page.waitForSelector('#syn_report_form');
    const textProject = await page.$eval('#project_span', (e) => e.textContent);
    const textPhase = await page.$eval('#phase_span', (e) => e.textContent);
    expect(textProject).toEqual('案件');
    expect(textPhase).toEqual('工程');
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case8.syn-report.jpg') });
  });

  it('Case 9 : Check-box 区分 - Check/uncheck any option', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#project_input');
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case9.syn-report.jpg') });
  });

  it('Case 10 : Check-box 区分 - Unchecked all options', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#phase_input');
    const messages = await page.$$eval('.ant-form-item-explain-error', (e) => e.map((v) => v.textContent));
    expect(messages).toContain('区分を選択してください。');
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case10.syn-report.jpg') });
  });

  it('Case 11 : Radio-box タイプ - Default value', async () => {
    await page.reload();
    await page.waitForSelector('#syn_report_form');
    const textProject = await page.$eval('#hours_span', (e) => e.textContent);
    const textPhase = await page.$eval('#amount_span', (e) => e.textContent);
    expect(textProject).toEqual('作業時間');
    expect(textPhase).toEqual('金額');
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case11.syn-report.jpg') });
  });

  it('Case 12 : Radio-box タイプ - Click in 作業時間 option', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#hours_input');
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case12.syn-report.jpg') });
  });

  it('Case 13 : Radio-box タイプ - Click in 金額 option', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#amount_input');
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case13.syn-report.jpg') });
  });
  it('Case 14 : Calendar 年月 - Default value', async () => {
    await page.waitForSelector('#syn_report_form');
    const startMonth = await page.$eval('#syn_report_form_startMonth', (e) => e.getAttribute('value'));
    const dateNow = moment(new Date()).format('YYYY/MM');
    const endMonth = await page.$eval('#syn_report_form_endMonth', (e) => e.getAttribute('value'));

    expect(startMonth).toEqual(dateNow);
    expect(endMonth).toEqual(dateNow);

    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case14.syn-report.jpg') });
  });

  it('Case 15 : Calendar 年月 - End month', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#syn_report_form_endMonth');
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case15.syn-report.jpg') });
    await page.keyboard.press('Enter');
  });

  it('Case 16 : Calendar 年月 - Change date', async () => {
    await page.reload();
    await page.waitForSelector('#syn_report_form');
    await page.click('#syn_report_form_startMonth');
    await page.waitForSelector('.ant-picker-year-btn');
    const startMonthButton = (await page.$$(
      '.ant-picker-header-view > button[class="ant-picker-year-btn"]',
    )) as unknown as HTMLButtonElement[];
    await startMonthButton[0].click();
    await page.waitForSelector('td[title="2021"]');
    await page.click('td[title="2021"]');
    await page.waitForSelector('td[title="2021-12"]');
    await page.click('td[title="2021-12"]');

    await page.click('#syn_report_form_endMonth', { delay: 1000 });
    const endMonthButton = (await page.$$(
      '.ant-picker-header-view > button[class="ant-picker-year-btn"]',
    )) as unknown as HTMLButtonElement[];
    await endMonthButton[1].click();
    await page.waitForSelector('.ant-picker-header-view > button[class="ant-picker-year-btn"]');
    await page.waitForSelector('td[title="2022"]');
    await page.click('td[title="2022"]');
    await page.click('td[title="2022-05"]');
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case16.syn-report.jpg') });
  });

  it('Case 17 : Calendar 年月 - Disable months', async () => {
    const dateNow = moment(new Date()).format('YYYY/MM');
    await page.waitForSelector('#syn_report_form');
    await ClearTextInputByElementId('#syn_report_form_startMonth');
    await page.type('#syn_report_form_startMonth', dateNow);
    await page.keyboard.press('Enter');
    await page.click('#syn_report_form_startMonth');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case17-1.syn-report.jpg') });

    await ClearTextInputByElementId('#syn_report_form_endMonth');
    await page.type('#syn_report_form_endMonth', dateNow);
    await page.keyboard.press('Enter');
    await page.click('#syn_report_form_endMonth');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case17-2.syn-report.jpg') });
  });

  it('Case 18 : Scroll screen', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case18.syn-report.jpg') });
  });

  it('Case 19 : Button ファイル出力 - Type 作業時間', async () => {
    await page.reload();
    await page.waitForSelector('#syn_report_form');
    await page.click('#hours_input');
    await page.click('#btn_export_csv');
    await page.waitForSelector('.ant-btn-loading-icon', { hidden: true });
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case19.syn-report.jpg') });
  });

  it('Case 20 : Button ファイル出力 - Type 作業時間', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#hours_input');
    UnCheckedRadioBoxByElementId('#phase_input');
    CheckedRadioBoxByElementId('#project_input');
    await page.click('#btn_export_csv');
    await page.waitForSelector('.ant-btn-loading-icon', { hidden: true });
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case20.syn-report.jpg') });
  });

  it('Case 21 : Button ファイル出力 - Type 作業時間', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#hours_input');
    CheckedRadioBoxByElementId('#phase_input');
    UnCheckedRadioBoxByElementId('#project_input');
    await page.click('#btn_export_csv');
    await page.waitForSelector('.ant-btn-loading-icon', { hidden: true });
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case21.syn-report.jpg') });
  });

  it('Case 22 : Button ファイル出力 - Type 作業時間', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#hours_input');
    await CheckedRadioBoxByElementId('#phase_input');
    await CheckedRadioBoxByElementId('#project_input');
    await UnCheckedRadioBoxByElementId('#parttime_employee_input');
    await UnCheckedRadioBoxByElementId('#dispatch_employee_input');
    await CheckedRadioBoxByElementId('#fulltime_employee_input');
    await page.click('#btn_export_csv');
    await page.waitForSelector('.ant-btn-loading-icon', { hidden: true });
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case22.syn-report.jpg') });
  });

  it('Case 23 : Button ファイル出力 - Type 作業時間', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#hours_input');
    await CheckedRadioBoxByElementId('#phase_input');
    await CheckedRadioBoxByElementId('#project_input');
    await UnCheckedRadioBoxByElementId('#parttime_employee_input');
    await UnCheckedRadioBoxByElementId('#fulltime_employee_input');
    await CheckedRadioBoxByElementId('#dispatch_employee_input');
    await page.click('#btn_export_csv');
    await page.waitForSelector('.ant-btn-loading-icon', { hidden: true });
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case23.syn-report.jpg') });
  });

  it('Case 24 : Button ファイル出力 - Type 作業時間', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#hours_input');
    await CheckedRadioBoxByElementId('#phase_input');
    await CheckedRadioBoxByElementId('#project_input');
    await UnCheckedRadioBoxByElementId('#dispatch_employee_input');
    await UnCheckedRadioBoxByElementId('#fulltime_employee_input');
    await CheckedRadioBoxByElementId('#parttime_employee_input');
    await page.click('#btn_export_csv');
    await page.waitForSelector('.ant-btn-loading-icon', { hidden: true });
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case24.syn-report.jpg') });
  });

  it('Case 25 : Button ファイル出力 - Type 作業時間', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#hours_input');
    await CheckedRadioBoxByElementId('#phase_input');
    await CheckedRadioBoxByElementId('#project_input');
    await CheckedRadioBoxByElementId('#dispatch_employee_input');
    await CheckedRadioBoxByElementId('#fulltime_employee_input');
    await CheckedRadioBoxByElementId('#parttime_employee_input');
    await page.click('#btn_export_csv');
    await page.waitForSelector('.ant-btn-loading-icon', { hidden: true });
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case25.syn-report.jpg') });
  });

  it('Case 26 : Button ファイル出力 - Type 金額', async () => {
    await page.reload();
    await page.waitForSelector('#syn_report_form');
    await page.click('#amount_input');
    await page.click('#btn_export_csv');
    await page.waitForSelector('.ant-btn-loading-icon', { hidden: true });
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case26.syn-report.jpg') });
  });

  it('Case 27 : Button ファイル出力 - Type 金額', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#amount_input');
    UnCheckedRadioBoxByElementId('#phase_input');
    CheckedRadioBoxByElementId('#project_input');
    await page.click('#btn_export_csv');
    await page.waitForSelector('.ant-btn-loading-icon', { hidden: true });
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case27.syn-report.jpg') });
  });

  it('Case 28 : Button ファイル出力 - Type 金額', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#amount_input');
    CheckedRadioBoxByElementId('#phase_input');
    UnCheckedRadioBoxByElementId('#project_input');
    await page.click('#btn_export_csv');
    await page.waitForSelector('.ant-btn-loading-icon', { hidden: true });
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case28.syn-report.jpg') });
  });

  it('Case 29 : Button ファイル出力 - Type 金額', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#amount_input');
    await CheckedRadioBoxByElementId('#phase_input');
    await CheckedRadioBoxByElementId('#project_input');
    await UnCheckedRadioBoxByElementId('#parttime_employee_input');
    await UnCheckedRadioBoxByElementId('#dispatch_employee_input');
    await CheckedRadioBoxByElementId('#fulltime_employee_input');
    await page.click('#btn_export_csv');
    await page.waitForSelector('.ant-btn-loading-icon', { hidden: true });
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case29.syn-report.jpg') });
  });

  it('Case 30 : Button ファイル出力 - Type 金額', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#amount_input');
    await CheckedRadioBoxByElementId('#phase_input');
    await CheckedRadioBoxByElementId('#project_input');
    await UnCheckedRadioBoxByElementId('#parttime_employee_input');
    await UnCheckedRadioBoxByElementId('#fulltime_employee_input');
    await CheckedRadioBoxByElementId('#dispatch_employee_input');

    await page.click('#btn_export_csv');
    await page.waitForSelector('.ant-btn-loading-icon', { hidden: true });
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case30.syn-report.jpg') });
  });

  it('Case 31 : Button ファイル出力 - Type 金額', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#amount_input');
    await CheckedRadioBoxByElementId('#phase_input');
    await CheckedRadioBoxByElementId('#project_input');

    await UnCheckedRadioBoxByElementId('#dispatch_employee_input');
    await UnCheckedRadioBoxByElementId('#fulltime_employee_input');
    await CheckedRadioBoxByElementId('#parttime_employee_input');

    await page.click('#btn_export_csv');
    await page.waitForSelector('.ant-btn-loading-icon', { hidden: true });
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case31.syn-report.jpg') });
  });

  it('Case 32 : Button ファイル出力 - Type 金額', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#amount_input');
    await CheckedRadioBoxByElementId('#phase_input');
    await CheckedRadioBoxByElementId('#project_input');
    await CheckedRadioBoxByElementId('#dispatch_employee_input');
    await CheckedRadioBoxByElementId('#fulltime_employee_input');
    await CheckedRadioBoxByElementId('#parttime_employee_input');
    await page.click('#btn_export_csv');
    await page.waitForSelector('.ant-btn-loading-icon', { hidden: true });
    await DelayFunction(1000);
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case32.syn-report.jpg') });
  });

  it('Case 54 : Click at button ファイル出力 many times - Unchecked all item in check-box 雇用形態', async () => {
    await page.reload();
    await page.waitForSelector('#syn_report_form');
    await page.click('#fulltime_employee_input');
    await page.click('#dispatch_employee_input');
    await page.click('#parttime_employee_input');
    const messages = await page.$$eval('.ant-form-item-explain-error', (e) => e.map((v) => v.textContent));
    expect(messages).toContain('雇用形態を選択してください。');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case54.syn-report.jpg') });
  });
  it('Case 55 : Click at button ファイル出力 many times - Unchecked all item in check-box 区分', async () => {
    await page.waitForSelector('#syn_report_form');
    await page.click('#project_input');
    await page.click('#phase_input');
    const messages = await page.$$eval('.ant-form-item-explain-error', (e) => e.map((v) => v.textContent));
    expect(messages).toContain('区分を選択してください。');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case55.syn-report.jpg') });
  });
  it('Case 56 : Click at button ファイル出力 many times - Unchecked all item in check-box 区分', async () => {
    await page.reload();
    await page.waitForSelector('#syn_report_form');
    await page.click('#btn_export_csv', { clickCount: 5 });
    await page.waitForSelector('.ant-btn-loading-icon', { hidden: true });
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case56.syn-report.jpg') });
  });

  it('Case 57 : Check sending data - Click at button ファイル出力 - Stop server for a moment', async () => {
    await page.reload();
    await page.waitForSelector('#syn_report_form');
    await CreateCDPSession(NETWORK_PRESETS.Offline);
    await page.click('#btn_export_csv');
    await page.waitForSelector('.ant-btn-loading-icon', { hidden: true });
    await page.waitForSelector('.ant-message-notice-content');
    const message = await page.$eval('.ant-message-notice-content > div', (e) => e.textContent);
    expect(message).toContain('サーバーエラーが発生しました。しばらくたってから再度お試しください。');
    await page.screenshot({ path: path.resolve(__dirname, './screenshots/case57.syn-report.jpg') });
    await CreateCDPSession(NETWORK_PRESETS.WiFi);
  });
});
