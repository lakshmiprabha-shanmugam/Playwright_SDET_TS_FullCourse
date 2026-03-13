import { test, expect, Locator } from "@playwright/test";

test("css demo", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");
    //absolute xpath
    //specify xpth= or use //before html..
    const absolutelogo: Locator = page.locator("body > div.master-wrapper-page > div.master-wrapper-content > div.header > div.header-logo > a > img");
    await expect(absolutelogo).toBeVisible();
    //relative xpath -relativelogo
    const relativelogo: Locator = page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect(relativelogo).toBeVisible();


    //contain()
    const products: Locator = page.locator("h2 > a[href*='computer']");
    const productsCount: number = await products.count();
    expect(productsCount).toBeGreaterThan(0);
    console.log(productsCount);
//console.log(await products.textContent());//error strict mode violation //will return one value
    console.log("First computer related product  xpathlocator.spec.ts:22 - CssElement.spec.ts:21", await products.first().textContent());
    console.log("last computer related product  xpathlocator.spec.ts:23 - CssElement.spec.ts:22", await products.last().textContent());
    console.log("nth computer related product  xpathlocator.spec.ts:24 - CssElement.spec.ts:23", await products.nth(2).textContent());//index is starting from 0 zero
let productTitle: string[] = await products.allTextContents() //store in an array exact all the text eelement in to array
    console.log("All computer  xpathlocator.spec.ts:27 - CssElement.spec.ts:25", productTitle)

    for (let pt of productTitle) {
        console.log(pt);

    }

 //start with()

const buildProducts: Locator = page.locator("h2 > a[href^='/build']");
const count: number = await buildProducts.count();
expect(count).toBeGreaterThan(0);



})
