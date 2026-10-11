import { test, expect } from '@playwright/test';

test('home exposes only the two approved demo entry points', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: /Probar restaurante/i }).or(page.getByRole('button', { name: /Probar restaurante/i }))).toBeVisible();
  await expect(page.getByRole('link', { name: /Probar cliente/i }).or(page.getByRole('button', { name: /Probar cliente/i }))).toBeVisible();
  await expect(page).toHaveScreenshot('home-approved.png', { fullPage: true, animations: 'disabled' });
});

test('critical pages have no obvious horizontal overflow', async ({ page }) => {
  await page.goto('/');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBeFalsy();
});
