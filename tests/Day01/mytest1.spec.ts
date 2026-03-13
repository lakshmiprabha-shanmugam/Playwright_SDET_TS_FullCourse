import { test, expect } from "@playwright/test";
//import { url } from "node:inspector";
//test will take two perameters, title, arrow function
/* test("title",()=>{
//step1
//step2
//step3

}
) */

//() fixture -global variable playwright provides us : page, page is a subset of browser
//to launch or validate the page we need page fixture, we need fixture from playwright
//syschrons(stpe1, step2... it will execute) and async any order it will execute
//whole function is using async function, 

test("verify page URL", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    let url: string = await page.url();//step1
    console.log("URL  mytest.spec.ts:20 - mytest1.spec.ts:20", url);//step2
    await expect(page).toHaveTitle("OrangeHRM")//step3

}

)
