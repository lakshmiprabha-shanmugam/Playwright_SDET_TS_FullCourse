import { test, expect, Locator } from "@playwright/test";
test("dropdown", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");

  const closeLoginPopup = page.locator("button", { hasText: "✕" });
  if (await closeLoginPopup.isVisible()) {
    await closeLoginPopup.click();
  }

  const searchBox = page.locator('input[name="q"]:not([readonly])');
  await searchBox.click();
  await searchBox.pressSequentially("smart");

  // Scope autosuggestions to the search form instead of all list items on the page.
  const option: Locator = page.locator('form[action="/search"] ul li');
  await option.first().waitFor({ state: "visible" });

  const count = await option.count();
  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    console.log(await option.nth(i).innerText());
  }
});
