import { test, expect, Locator } from "@playwright/test";

import { loginToOrangeHRM } from "./helpers/login";

test("OrangeHRM Dashboard", async ({ page }) => {
  await loginToOrangeHRM(page);

  //await page.locator("//a[contains(@href,'/web/index.php/admin')]").click();

  await page.locator("//a[starts-with(@href,'/web/index.php/admin')]").click();

  await expect(page.locator("//label[text()='Username']")).toHaveText(
    "Username",
  );
  await expect(
    page.locator("//label[normalize-space()=' User Role']"),
  ).toHaveText("User Role");
  await expect(
    page.locator("//label[normalize-space()=' Employee Name']"),
  ).toHaveText("Employee Name");
  await expect(page.locator("//label[normalize-space()=' Status']")).toHaveText(
    "Status",
  );
await 

});
