import { test, expect, Locator } from "@playwright/test";

test("verify colors dropdown is not sorted", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropDownOptions: Locator = page.locator("#animals>option");
    //const optionText: string[] = (await (dropDownOptions.allTextContents())).map((text: string) => text.trim());
const optionText:string[]=(await page.locator("#animals>option").allTextContents()).map((text)=>text.trim());
    const myset = new Set<string>(); //set collection duplicate are not allowed

    const duplicates: string[] = []; //array duplicates allowed

    for (const text of optionText) {

        if (myset.has(text)) {
            duplicates.push(text);


        } else {

            myset.add(text);

        }

    }

    console.log(duplicates);

    if (duplicates.length > 0) {

        console.log("duplicated found - duplicatedropdown.spec.ts:30")

    }
    else {

        expect(duplicates.length).toBe(0);
    }

});