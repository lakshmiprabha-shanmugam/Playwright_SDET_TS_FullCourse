import { test, expect, Locator } from "@playwright/test";

test('dynamic xpath', async ({ page }) => {

    test.setTimeout(60000);

    const url = "https://testautomationpractice.blogspot.com/";
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 });
            break;
        } catch (error) {
            if (attempt === 3) throw error;
            await page.waitForTimeout(2000);
        }
    }

    //loop to click the button 5 times

    /*  for (let i = 1; i <= 5; i++) {
 
         // let button= await page.locator('//button[text()="START" or text()="STOP"]');
         //let button =await page.locator('//button[text()="START"]');
         let button = await page.locator('//button[@name="start" or text()="STOP"]');
         //let button=page.locator("//button[contains(@name,'st')]");
         //let button = page.locator("//button[starts-with(@name,'st')]");
 
         await button.click();
 
         await page.waitForTimeout(2000);
 
     }
  */
    //css
    /* for (let i = 1; i <= 5; i++) {
        const button = page.locator('button[name="start"], button[name="stop"]');
        await expect(button).toBeVisible();
        await button.click();
        await page.waitForTimeout(1000);
    } */

    //using playwright specific locators

    for (let i = 1; i <= 5; i++) {
        const button = page.getByRole('button', { name: /START|STOP/ });
        await expect(button).toBeVisible({ timeout: 10000 });
        await button.click();
        await page.waitForTimeout(1000);
    }

})
