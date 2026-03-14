import { test, expect, Locator } from "@playwright/test";

/* page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured). */

test("Demo of Playwright Locator", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  //page.getByAltText()

  const logoimage: Locator = page.getByAltText("company-branding");
  console.log(await expect(logoimage).toBeVisible());
  await expect(page.locator("(//img[@alt='orangehrm-logo'])[2]")).toBeVisible();

  //page.getByRole()
  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();

  page.locator("//p[normalize-space()='Username : Admin']");

  page.locator("//p[normalize-space()='Password : admin123']");

  await expect(
    page.locator('//label[@class="oxd-label" and text()="Username"]'),
  ).toBeVisible();

  await page.getByPlaceholder("Username").fill("Admin");
  await expect(
    page.locator('//label[@class="oxd-label" and text()="Password"]'),
  ).toBeVisible();

  await page.getByPlaceholder("Password").fill("admin123");

  await expect(page.getByRole("button", { name: "Login" })).toBeEnabled();

  await expect(page.locator("//p(text()='Forgot your password? ']")).toBeTruthy;

  await expect(page.locator("//div/p[.='OrangeHRM OS 5.8']")).toBeVisible();

  await expect(
    page.getByRole("link", { name: "OrangeHRM, Inc" }),
  ).toHaveAttribute("href", /orangehrm/);

  await page.getByRole("button", { name: "Login" }).click();
  //updated
});
