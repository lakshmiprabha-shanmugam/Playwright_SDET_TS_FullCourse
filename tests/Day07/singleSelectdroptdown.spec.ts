import { test, expect, Locator } from "@playwright/test";

test("single select dropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    //1)select option from the dropdown
    //const country:Locator=page.locator('select[id="country"]')
    //const country:Locator=page.locator('select[id="country"]')
    //await country.selectOption({label:"United States"});

    //await page.locator('#country').selectOption('India');//visible text
    //await page.locator('#country').selectOption({value:'uk'});//by using value attribute
    //await page.locator('#country').selectOption({label:"India"});//by using label
    //await page.locator('#country').selectOption({index:3});//using index

    //await page.waitForTimeout(5000);

    //2)check number of options in the dropdown
    const dropdownOptions: Locator = page.locator('#country>option');
    console.log(await dropdownOptions.count());
    await expect(dropdownOptions).toHaveCount(10);

    //3)check the dropdown option is present or not
    const optionstext: string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());
    console.log(optionstext);
    expect(optionstext).toContain('Japan');

    const hasJapan = optionstext.includes("Japan");//returns true or false
    console.log(hasJapan);
    expect(hasJapan).toBe(true);

    //printing option from the dropdown

    for (const option of optionstext) {

        console.log(option)

    }
    await page.waitForTimeout(5000);
});
