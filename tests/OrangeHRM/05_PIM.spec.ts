import { test, expect, Locator } from "@playwright/test";

import { loginToOrangeHRM } from "./helpers/login";

test("OrangeHRM Dashboard", async ({ page }) => {
  await loginToOrangeHRM(page);

  await page
    .locator("//a[contains(@href,'/web/index.php/pim/viewPimModule')]")
    .click();
  //Updated on 3/14/2026
  //clicked on job title
  await page.locator("form i").nth(2).click();
  await page.waitForTimeout(3000);
  const options: Locator = page.locator("div[role='listbox'] span");
  const count: number = await options.count();
  console.log(count);

  //print all

  for (let i = 0; i < count; i++) {
    //console.log(await options.nth(i).textContent());

    //console.log(await options.nth(i).innerText());
    const text = await options.nth(i).innerText();

    if (text === "Automaton Tester") {
      await options.nth(i).click();
      break;
    }

    //return in the form of array
    //console.log(await options.nth(i).allTextContents());
  }
  await page.waitForTimeout(3000);
  //select click on option
});
