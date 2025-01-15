import { test, expect } from "@playwright/test";

test("Has Index title", async ({ page }) => {
  await page.goto("/");
  
  // Wait for the page to be fully loaded by checking for a reliable element
  await page.waitForSelector('main', { state: 'visible' });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Index - Nuxt 3 Woocommerce/);
});
