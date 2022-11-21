/**
 *
 * @param ms is millisecond ex : 1000 = 1s
 */
export async function DelayFunction(ms: number) {
  await new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}
