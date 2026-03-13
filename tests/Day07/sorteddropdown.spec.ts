import { test, expect, Locator } from "@playwright/test";

/* test("verify dropdown are shorted or not", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    //const dropDownOption:Locator=page.locator("#animals>option");
const optionsText:string[]=(await page.locator("#animals>option").allTextContents()).map((text)=>text.trim());
const orginalList:string[]=[...optionsText];
const sortedList:string[]=[...optionsText].sort();

console.log(orginalList);
console.log(sortedList);
 await expect(orginalList).toEqual(sortedList)
}); */
test("verify colors dropdown is not sorted", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const optionsText: string[] = (await page.locator("#colors > option").allTextContents())
    .map(text => text.trim());

  const sortedList: string[] = [...optionsText].sort();

  console.log("Actual: - sorteddropdown.spec.ts:22", optionsText);
  console.log("Sorted: - sorteddropdown.spec.ts:23", sortedList);

  expect(optionsText).not.toEqual(sortedList);
});
