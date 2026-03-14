import { test, expect, Locator } from "@playwright/test";

import { loginToOrangeHRM } from "./helpers/login";
// Dashboard tests updated - branch practice
test("OrangeHRM Dashboard", async ({ page }) => {
  await loginToOrangeHRM(page);

  const dashboardwidget: Locator = page.locator(
    "//div/div[@class='oxd-grid-item oxd-grid-item--gutters orangehrm-dashboard-widget']",
  );

  await expect(dashboardwidget.first()).toBeVisible();
  await expect(dashboardwidget).toHaveCount(7);

  const allwidget: string[] = await dashboardwidget.allTextContents();

  for (const widgetcount of allwidget) {
    console.log(widgetcount);
  }

  //quick Launch

  page.locator(
    "oxd-grid-item oxd-grid-item--gutters orangehrm-quick-launch-card",
  );
});
