import { test, expect, Locator } from "@playwright/test";

test("multi select dropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    //1)select option from the dropdown
    //await page.locator("#colors").selectOption(['Red', 'Blue', 'Green']);//using visible text
    //await page.locator("#colors").selectOption(['blue', 'green']);//value attribute
    //await page.locator("#colors").selectOption([{ label: 'blue' }, { label: 'Yellow' }]);//using label
    await page.locator('#colors').selectOption([{ index: 0 }, { index: 2 }]);
    //2)check number of options in the dropdown(count)

const dropdownOption:Locator=page.locator('#colors>option')
await expect(dropdownOption).toHaveCount(7);

    //3)check the dropdown option is present or not
const optionText:string[]=(await (dropdownOption.allTextContents())).map((text: string)=>text.trim());

    //4)printing option from the dropdown
for(const option of optionText){

    console.log(option);
    }

});
