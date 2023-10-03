import { test, expect } from '@playwright/test';

test('OK: getByLabel is ok', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await expect(page.getByLabel(/output1/i)).toBeVisible()
  await expect(page.getByLabel(/output2/i)).toBeVisible()
  await expect(page.getByLabel(/checkbox1/i)).toBeVisible()
  await expect(page.getByLabel(/checkbox2/i)).toBeVisible()

  await expect(page.getByRole('checkbox', {name: /checkbox1/i})).toBeVisible()
  await expect(page.getByRole('checkbox', {name: /checkbox2/i})).toBeVisible()

});

test('NG1: getByRole is ng for <output>', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await expect(page.getByRole('status', {name: /output1/i})).toBeVisible()
});

test('NG2: getByRole is ng for <output>', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await expect(page.getByRole('status', {name: /output2/i})).toBeVisible()
});


