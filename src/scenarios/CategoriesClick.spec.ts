import { test, expect } from '@playwright/test';

test('Navegar para a categoria "Mais Vendidos" na Amazon Brasil', async ({ page }) => {

  await page.goto('https://www.amazon.com.br/');


  await page.click('a[href*="/gp/bestsellers/?ref_=nav_cs_bestsellers"]');

  await expect(page).toHaveURL(/.*bestsellers.*/);
});
