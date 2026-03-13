import { test, expect, Locator } from "@playwright/test";

import { loginToOrangeHRM } from "./helpers/login";

test("OrangeHRM Dashboard", async ({ page }) => {
  await loginToOrangeHRM(page);

  await page.locator("//a[contains(@href,'/web/index.php/admin')]").click();
});
