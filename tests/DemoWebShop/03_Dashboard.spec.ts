import { test, expect, Locator } from "@playwright/test";
import { loginToWebShop } from "./helpers/WebDemoLogin.ts";

test("Dashboard", async ({ page }) => {
  await loginToWebShop(page);
  //topmenu
  const menu = page.locator("ul.top-menu");
  await expect(menu).toBeVisible();

  const menuItems = page.locator("ul.top-menu > li");
  await expect(menuItems.first()).toBeVisible();

  const total = await menuItems.count();
  console.log("total", total);

  await expect(page.locator("ul.top-menu > li")).toHaveCount(7);

  //categories
  const categoryItems = page.locator(
    "//div[contains(@class,'block-category-navigation')]//ul[contains(@class,'list')]/li",
  );
  //const categoryItems = page.locator("div.block-category-navigation ul.list > li");
  await expect(categoryItems.first()).toBeVisible();

  const categoriesTotal = await categoryItems.count();

  console.log("categoriesTotal", categoriesTotal);

  await expect(
    page.locator(
      "//div[contains(@class,'block-category-navigation')]//ul[contains(@class,'list')]/li",
    ),
  ).toHaveCount(7);
  const categoryList: string[] = (await categoryItems.allTextContents())
    .map((item) => item.trim())
    .filter(Boolean);

  for (const listItem of categoryList) {
    console.log(listItem);
  }

  const lastitem: Locator = page.locator(
    "//div[contains(@class,'block-category-navigation')]//ul[contains(@class,'list')]/li[last()]",
  );
  await expect(lastitem).toBeVisible();
  console.log("Text content of last element", await lastitem.textContent());

  const positionitem: Locator = page.locator(
    "//div[contains(@class,'block-category-navigation')]//ul[contains(@class,'list')]/li[position()=2]",
  );
  await expect(positionitem).toBeVisible();
  console.log(
    "Text content of position element",
    await positionitem.textContent(),
  );
});
