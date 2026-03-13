import { test, expect, Locator } from "@playwright/test";

test("xpath demo", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");
    //absolute xpath
    //specify xpth= or use //before html..
    const absolutelogo: Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await expect(absolutelogo).toBeVisible();
    //relative xpath -relativelogo
    const relativelogo: Locator = page.locator("xpath=//img[@alt='Tricentis Demo Web Shop']");
    await expect(relativelogo).toBeVisible();


    //contain()

    const products: Locator = page.locator("//h2/a[contains(@href,'computer')]");
    const productsCount: number = await products.count();
    expect(productsCount).toBeGreaterThan(0);
    console.log(productsCount);
    //console.log(await products.textContent());//error strict mode violation //will return one value
    console.log("First computer related product - xpathlocator.spec.ts:22", await products.first().textContent());
    console.log("Last computer related product - xpathlocator.spec.ts:23", await products.last().textContent());
    console.log("Nth computer related product - xpathlocator.spec.ts:24", await products.nth(2).textContent());//index is starting from 0 zero

    let productTitle: string[] = await products.allTextContents() //store in an array exact all the text eelement in to array
    console.log("All computer products - xpathlocator.spec.ts:27", productTitle)

    for (let pt of productTitle) {
        console.log(pt);

    }
    //start with()

    const buildProducts: Locator = page.locator("//h2/a[starts-with(@href,'/build')]");//returns mutiple elements
    const count: number = await buildProducts.count();
    expect(count).toBeGreaterThan(0);
    // text() inner text
    const reglink: Locator = page.locator("a:has-text('Register')");
    await expect(reglink).toBeVisible();

    // first()
    const firstitem: Locator = page.locator("div:has(> h3:has-text('Follow us')) ul > li:nth-child(1)");
    await expect(firstitem).toBeVisible();
    console.log(await firstitem.textContent());

    // position() = 4
    const positionitem: Locator = page.locator("div:has(> h3:has-text('Follow us')) ul > li:nth-child(4)");
    await expect(positionitem).toBeVisible();
    console.log(await positionitem.textContent());

    // last()
    const lastitem: Locator = page.locator("div:has(> h3:has-text('Follow us')) ul > li:last-child");
    await expect(lastitem).toBeVisible();
    console.log(await lastitem.textContent());

})





