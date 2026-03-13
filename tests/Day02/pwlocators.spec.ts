/* page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.(non interactive elements)
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured). */

//locator works as dom structore.
//DOM- document object model
//API interface provided by browser itself. DOM automotically created by browsers only at runtime

import { test, expect, Locator } from "@playwright/test";

test("Demo of Playwright Locator", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    //getByAltText - locator used for images on the alt attribute.
    //Use this locator when your element supports alt text such as img and area element
    //locator is fixture, need to import
    //await is not relaven here, if the step is no need any action then dont specify
    const logo: Locator = page.getByAltText("Tricentis Demo Web Shop"); //locator is also one of the fixture
    await expect(logo).toBeVisible();
    await logo.click();
    //2.page.getByText()- find an element by the text it contains. you can match by a substring, exact string,
    //Locate by visible text
    //use this locator to find non interactive element like div, span, p etc
    //for interactive elements like button, a, input tec use role loctors
    //<p>welcome<p>

    await expect(page.getByText("Welcome to our store")).toBeVisible();//full text

    const text: Locator = page.getByText("Welcome to our");//provided substring partial text
    await expect(text).toBeVisible();
    await expect(page.getByText(/Welcome\s+To\s+Our\s+STORE/i)).toBeVisible(); //case insensitive regex

    //3. page.getByRole()- Locating by role is not an attribute
    //Role locator include button, checkboxes, heading, links, lists, tables,
    //and many more and follow w3c specification for ARIA role.
    //prefer for interactive 

    await page.getByRole("link", { name: 'Register' }).click();
    await expect(page.getByRole("heading", { name: /Register/i })).toBeVisible();
    await page.getByRole("radio", { name: 'Female' }).click();
    //page.getByLabel() - Locate form control by label's text
    //ideal for visible label
    await page.getByLabel("First name:").fill("Lakshmi");
    await page.getByLabel("Last name:").fill("Shanmugam");
    await page.getByLabel("Email:").fill("lakshmishan@gmail.com");
    //page.getByPlaceholder
    await page.getByPlaceholder("Search store").fill("Apple Book");

    //page.getByTitle() to locate an element by its title attribute
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle(/Playwright/);

    //page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured)

})
