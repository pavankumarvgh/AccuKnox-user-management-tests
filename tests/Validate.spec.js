const { test, expect } = require('@playwright/test')

test('Validate newly created user', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('test.user123');
  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page.locator('//div[contains(text(),"test.user123")]')).toBeVisible();
 
});
