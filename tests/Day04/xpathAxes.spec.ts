import { test, expect, Locator } from "@playwright/test";

test("Xpath Aes demo", async ({ page }) => {
  await page.goto("https://www.w3schools.com/html/html_tables.asp");
  //1.self axis -select <td> element that contains "Germany"
  const germanyCell: Locator = page.locator("//td[text()='Germany']/self::td");

  await expect(germanyCell).toHaveText("Germany");
  //2.parent axis -Get parent <tr> of the "Germany" cell

  const parentRow: Locator = page.locator("//td[text()='Germany']/parent::tr");
  //await expect(parentRow).toHaveText("Germany");

  console.log(await expect(parentRow).toHaveCount(1));
  await expect(parentRow).toContainText("Germany");
  console.log(expect(await parentRow.textContent()));

  const tablecompany = page.locator("//table[@id='customers']");
  console.log(await tablecompany.count());

  //If you want only data rows (exclude header):
  const dataRows = page.locator("//table[@id='customers']//tr[position()>1]");
  console.log("Data rows:", await dataRows.count());
  //2nd tr
  const secondndrows = page.locator(
    "//table[@id='customers']//tr[3]/child::td",
  );
  console.log("secondndrows:", await expect(secondndrows).toHaveCount(3));
  //display all the child element
});
