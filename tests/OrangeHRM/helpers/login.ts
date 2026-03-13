/* import { Page } from "@playwright/test";

export async function loginToOrangeHRM(page: Page) {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
} */


import { Page } from "@playwright/test";

export async function loginToOrangeHRM(page: Page) {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForURL("**/web/index.php/dashboard/index");
}
