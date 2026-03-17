import { test, expect } from "@playwright/test";

import { loginToOrangeHRM } from "./helpers/login";
// VS Code branch practice change
test("OrangeHRM Dashboard", async ({ page }) => {
  await loginToOrangeHRM(page);

  await page.locator("//a[starts-with(@href,'/web/index.php/admin')]").click();
  await page.waitForURL("**/web/index.php/admin/viewSystemUsers");

  const systemUsersForm = page.locator("form").filter({
    has: page.getByText("Username", { exact: true }),
  });

  await expect(
    systemUsersForm.getByText("Username", { exact: true }),
  ).toBeVisible();
  await expect(
    systemUsersForm.getByText("User Role", { exact: true }),
  ).toBeVisible();
  await expect(
    systemUsersForm.getByText("Employee Name", { exact: true }),
  ).toBeVisible();
  await expect(
    systemUsersForm.getByText("Status", { exact: true }),
  ).toBeVisible();
});
