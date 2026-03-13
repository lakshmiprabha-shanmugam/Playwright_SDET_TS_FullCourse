import { test, expect, Locator } from "@playwright/test";
test("ToolQA Demo", async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form")
    //firstname field
    const firstname: Locator = page.getByPlaceholder("First Name")
    await expect(firstname).toBeVisible();
    await expect(firstname).toBeEnabled();
    const maxLenght: string | null = await firstname.getAttribute("maxlenght");
    console.log(maxLenght)
    await firstname.fill("Lakshmi");
    expect(firstname.inputValue, "Lakshmi");
    const value1 = await firstname.inputValue();
    console.log(value1)
    await expect(firstname).toHaveValue("Lakshmi");
    //lastname field
    const lastname: Locator = page.locator("#lastName") //id user locator
    await expect(lastname).toBeVisible();
    await expect(lastname).toBeEnabled();
    await lastname.fill("Shanmugam");
    //Email Feild
    const email = page.getByPlaceholder("name@example.com");
    await expect(email).toBeVisible();
    await expect(email).toBeEmpty();
    await email.fill("lakshmishan@gmail.com");
    expect(email.inputValue, "lakshmishan@gmail.com");
    const value2 = await email.inputValue();
    console.log(value2);
    await expect(email).toHaveValue("lakshmishan@gmail.com");


})
//Gender radio button
test("Gender radio button", async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");
    const genderMale: Locator = page.locator('input[type="radio"][value="Male"]');

    if (await genderMale.isVisible()) {
        await genderMale.check();
        await expect(genderMale).toBeChecked();
        expect(await (genderMale).isChecked()).toBe(true);
    }
    else { "not visible" }

})

test("mobile", async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");
    const mobile: Locator = page.locator('input[id="userNumber"]');
    const maxLength: string | null = await mobile.getAttribute("maxlength");
    expect(maxLength).toBe('10');
    const minLength: string | null = await mobile.getAttribute("minlength");
    expect(minLength).toBe('10');
    if (maxLength && minLength && Number(maxLength) >= 10 && Number(minLength) >= 10) {

        await page.locator('input[id="userNumber"]').fill("1234567890");

    } else {
        console.log(maxLength, minLength, "is not true - pwToolQA.spec.ts:58");
    }
});

test("Date of Birth", async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");
    const dateofbirth: Locator = page.locator('input[id="dateOfBirthInput"][type="text"]');
    await dateofbirth.fill('19 Mar 1990')
});

test("Hobbies", async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");
    //sport only
    const checkbox2 = page.locator('input[id="hobbies-checkbox-2"]');
    expect(await checkbox2.isChecked()).toBe(false);
    const hobbies: string[] = ["Sports", "Reading", "Music"];
    const checkboxes: Locator[] = hobbies.map(hobbie => page.getByLabel(hobbie))
    expect(checkboxes.length).toBe(3);

    //select all
    for (const checkbox of checkboxes) {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
    for (const checkbox of checkboxes.slice(-2)) {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }
    for (const checkbox of checkboxes) {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }
    const indexes: number[] = [0, 2];
    for (const i of indexes) {

        checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
    }

    //select the check box based on the label

    const hobbies2: string = "reading";
    for (const label of hobbies) {
        if (label.toLowerCase() === hobbies2.toLowerCase()) {
            const checkbox = page.getByLabel(label);
            checkbox.check();
            await expect(checkbox).toBeChecked();

        }
    }
});