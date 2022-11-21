import { ElementHandle } from 'puppeteer';

/**
 *
 * @param elementId example ClearTextInputByElementId('#element_id_string')
 */
export async function ClearTextInputByElementId(elementId: string) {
  await page.click(elementId);
  await page.keyboard.down('ControlLeft');
  await page.keyboard.press('A');
  await page.keyboard.up('ControlLeft');
  await page.keyboard.press('Backspace');
}

export function calculateDistance(elem: any, elem2: any) {
  return Math.floor(
    Math.sqrt(
      Math.pow(elem2.offset().left + elem2.width() / 2 - (elem.offset().left + elem.width() / 2), 2) +
        Math.pow(elem2.offset().top + elem2.height() / 2 - (elem.offset().top + elem.height() / 2), 2),
    ),
  );
}

/**
 *
 * @param elementId example ClearTextInputByElementId('#element_id_string')
 */
export async function CheckedRadioBoxByElementId(elementId: string) {
  const checkbox = (await page.$(elementId)) as ElementHandle<Element>;
  const isChecked = await (await checkbox.getProperty('checked')).jsonValue();
  if (!isChecked) {
    await checkbox.click();
  }
}

export async function UnCheckedRadioBoxByElementId(elementId: string) {
  const checkbox = (await page.$(elementId)) as ElementHandle<Element>;
  const isChecked = await (await checkbox.getProperty('checked')).jsonValue();
  if (isChecked) {
    await checkbox.click();
  }
}
