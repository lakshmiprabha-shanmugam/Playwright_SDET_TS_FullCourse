import { Page, expect } from "@playwright/test";

export async function loginToWebShop(page: Page) {
  await page.goto("https://demowebshop.tricentis.com/login");

  await expect(
    page.locator("//div/strong[text()='Returning Customer']"),
  ).toBeVisible();

  await page.locator("#Email").fill("lakshmishanmug2026@gmail.com");

  await page.getByLabel("Password:").fill("Test1234");

  await page.getByRole("button", { name: "Log in" }).click();
}
