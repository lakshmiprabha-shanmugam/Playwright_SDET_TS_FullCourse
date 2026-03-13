import { test, expect, Locator } from "@playwright/test";

test("Register", async ({ page }) => {
  page.goto("https://demowebshop.tricentis.com/register");

  await expect(page.getByRole("heading", { name: "Register" })).toBeVisible();
  await expect(
    page.locator("//div/strong[text()='Your Personal Details']"),
  ).toBeVisible();

  await page.locator("//input[@id='gender-female']").check();

  await page.getByLabel("First name").fill("Lakshmi");
  await page.locator("#LastName").fill("Shan");
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("lakshmishanmug2026@gmail.com");

  await page.locator("#Password").fill("Test1234");
  await page.locator("#ConfirmPassword").fill("Test1234");

  await page.locator("//input[@id='register-button']").click();

  //await page.getByRole('button', { name: 'Register' }).click();
});
