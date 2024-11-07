import { test, expect } from '@playwright/test';

test('Buscar um produto na Amazon', async ({ page }) => {

  await page.goto('https://www.amazon.com.br/');

  await page.fill('#twotabsearchtextbox', 'notebook');

  await page.click('input#nav-search-submit-button');
});
