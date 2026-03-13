import { test, expect, Locator } from "@playwright/test";

test("single select dropdown", async ({ page }) => {
    //Open Url    
    await page.goto("https://bstackdemo.com/#");
    //Interact iwht the "Order by drapdown: 
    //Locate the "order by"dropdown element
    //await page.locator("select").selectOption("highestprice");

    //await page.locator("select").selectOption({value:"lowestprice"});
    // await page.locator("select").selectOption({ label: "Lowest to highest" });
    await page.locator("select").selectOption({ index: 2 });
    await page.waitForTimeout(5000);

});
test("verify the dropdown is displayed and enabled", async ({ page }) => {
    //Open Url    
    await page.goto("https://bstackdemo.com/#");
    page.locator('select>option').isEnabled;
    page.locator('select>option').isDisabled;
    const dropdownOptions: Locator = page.locator('select>option');
    //console.log(await dropdownOptions.allTextContents());
    await expect(dropdownOptions).toHaveCount(3);

    const hasLowertoHighter: string[] = (await dropdownOptions.allTextContents()).map(text => text);
    console.log(hasLowertoHighter);
    expect(hasLowertoHighter).toContain('Lowest to highest');
});

test("Retrive and Print Product Information", async ({ page }) => {
    await page.goto("https://bstackdemo.com/#");

    await expect(page.locator("select")).toBeEnabled();

    const dropdownOptions: Locator = page.locator("select > option");
    await page.locator("select").selectOption({ index: 2 });
    await page.getByText("OnePlus").click();
});