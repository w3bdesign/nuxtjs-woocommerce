import { test, expect } from "@playwright/test";

test("Has Index title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Index - Nuxt 3 Woocommerce/);
});
