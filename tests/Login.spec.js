 
 
 const { test, expect } = require('@playwright/test')
 test('01-Login with valid credentials', async ({ page }) => {
 
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 
   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
   await page.getByRole('button', { name: 'Login' }).click();
   await expect(page.locator("//h6[normalize-space()='Dashboard']")).toBeVisible();

 })