import {test, expect} from "@playwright/test";

test("mytest",async({page})=>{
await page.goto("https://www.saucedemo.com/");
    expect(page).toHaveTitle("Swag Labs");
let title:string=await page.title();
console.log(title);

})
