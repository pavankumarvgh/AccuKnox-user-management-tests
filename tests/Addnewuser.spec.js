const { test, expect } = require('@playwright/test')
test('02-add new user', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.locator("input[name='username']").fill('Admin');
  await page.locator("input[name='password']").fill('admin123');
  await page.locator('button[type="submit"]').click();
  
  await page.locator("//span[normalize-space()='PIM']").click();
  
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('pavan');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('kumar');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(5000)
  
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
  await page.getByRole('option', { name: 'ESS' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('pavan kumar');
  await page.getByText('pavan kumar').first().click();
  await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Enabled' }).click();
 
  await page.getByRole('textbox').nth(2).fill('test.user123');

  await page.getByRole('textbox').nth(3).fill('Pavan@123');
  await page.getByRole('textbox').nth(4).fill('Pavan@123');

  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(5000)
});
