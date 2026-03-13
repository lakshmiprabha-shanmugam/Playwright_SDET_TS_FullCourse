import { test, expect, Locator } from "playwright/test"
//text input/text box/
test("Test Input Actions", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const textbox: Locator = page.locator("#name")
    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();
    const maxLenght: string | null = await textbox.getAttribute("maxlength"); //returns value of max length
    console.log(maxLenght);
    expect(maxLenght).toBe('15');
    await textbox.fill("Lakshmi Shan");
    //console.log(await textbox.textContent());
    expect(textbox.inputValue, "Lakshmi Shan")
    const value = await textbox.inputValue();
    console.log(value);

    await expect(textbox).toHaveValue("Lakshmi Shan");
});
//checkbox and radio buttons
test("radio button Actions", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    let maleRadio: Locator = page.locator("#male");
    expect(await maleRadio.isChecked()).toBe(false);
    if (await maleRadio.isVisible()) {

        page.locator("#male").check()
        await expect(maleRadio).toBeChecked();
        expect(await maleRadio.isChecked()).toBe(true);
        await page.waitForTimeout(3000);
    } else {
        console.log("Male radio button is not visible or not enabled - pwActions.spec.ts:34");
    }
});

// Checkbox and assert
test("Checkbox button Actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const daysCheckbox: Locator = page.getByLabel("Sunday");
    expect(await daysCheckbox.isChecked()).toBe(false);
    const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const checkboxes: Locator[] = days.map(day => page.getByLabel(day));
    expect(checkboxes.length).toBe(7);

    /* if (await daysCheckbox.isVisible()) 
  {

       const checkboxes: Locator[] = days.map(day => page.getByLabel(day));
       expect(checkboxes.length).toBe(7);

       // select all checkboxes and assert each is checked
       for (const checkbox of checkboxes) {
           await checkbox.check();
           await expect(checkbox).toBeChecked();
       } */

    // uncheck only last 3 checkboxes
    /*  for (const checkbox of checkboxes.slice(-3)) {
         await checkbox.uncheck();
         await expect(checkbox).not.toBeChecked();
     }
 } else {
     console.log("checkbox is not visible or not enabled - pwActions.spec.ts:65");
 } */
    //toogle checkes:
    /*  for (const checkbox of checkboxes) {
 
         if (await checkbox.isChecked()) {
             //only not checked
             await checkbox.uncheck();
             await expect(checkbox).not.toBeChecked();
 
         } else {
             //checked
             await checkbox.check();
             await expect(checkbox).toBeChecked();
         }
     } */
    //randomely select checkboxes -sselect checkboxes by index(1,3,6)

    /*  const indexes: number[] = [1, 3, 6];
     for (const i of indexes) {
         
         checkboxes[i].check();
 
         await expect(checkboxes[i]).toBeChecked();
 
     } */

    //select the check box based on the label

    const weekname: string = "Friday";
    for (const label of days) {
        if (label.toLowerCase() === weekname.toLowerCase()) {
            const checkbox = page.getByLabel(label);
            checkbox.check();
            await expect(checkbox).toBeChecked();

        }

        const weekname1:string = "tuesday";

        if (label.toLowerCase() === weekname1.toLowerCase()) {
            const checkbox = page.getByLabel(label);
            checkbox.check();
            await expect(checkbox).toBeChecked();

        }
    }
});
