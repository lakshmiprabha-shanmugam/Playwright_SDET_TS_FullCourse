import { test, expect, Locator } from "@playwright/test";

import { loginToOrangeHRM } from "./helpers/login";
// practicing VS Code git features using teriminal- Updated -updated2
test("OrangeHRM Dashboard", async ({ page }) => {
  await loginToOrangeHRM(page);

  await expect(page.locator("//img[@alt='client brand banner']")).toBeVisible();
  //await expect(page.getByAltText("client brand banner")).toBeVisible();
  //await page.waitForTimeout(10000);

  const menu: Locator = page.locator("//ul[@class='oxd-main-menu']/li");
  const menuCount: number = await menu.count();
  expect(menuCount).toBeGreaterThan(0);
  console.log(menuCount);

  //extrack text content from menu
  //console.log(await menu.textContent());//strickt modd violation
  console.log("This is first menu", await menu.first().textContent());
  console.log("This is last menu", await menu.last().textContent());
  console.log("This is first menu", await menu.nth(3).textContent());

  let allmenuitem: string[] = await menu.allTextContents();

  for (let pt of allmenuitem) {
    console.log(pt);
  }

  console.log("All menus:", await menu.allTextContents());

  await page.getByPlaceholder("Search").fill("Admin");

  await page.getByRole("link", { name: "Admin" }).click();

  //await expect(page.locator(".oxd-topbar-header-breadcrumb")).toHaveText("/Admin\s*/\s*User Management/");
  //await expect(page.locator(".oxd-topbar-header-breadcrumb")).toHaveText(/Admin\s*\/\s*User Management/);

  await expect(page.locator(".oxd-topbar-header-breadcrumb-module")).toHaveText(
    "Admin",
  );
  await expect(page.locator(".oxd-topbar-header-breadcrumb-level")).toHaveText(
    "User Management",
  );

  await page.getByPlaceholder("Search").fill("PIM");

  await page.getByRole("link", { name: "PIM" }).click();
  await expect(page.locator(".oxd-topbar-header-breadcrumb")).toHaveText("PIM");

  await page.getByPlaceholder("Search").fill("Leave");
  await page.getByRole("link", { name: "Leave" }).click();
});
