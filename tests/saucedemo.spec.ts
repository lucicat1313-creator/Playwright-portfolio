import { test, expect } from '@playwright/test'

test('normal login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button', { name: 'Login' }).click()
    
})

test('incorrect username', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('potato_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button', { name: 'Login' }).click()
    
})

test('incorrect password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('potato_password')
    await page.getByRole('button', { name: 'Login' }).click()
})

test('empty username and password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByRole('button', { name: 'Login' }).click()
})


test('filled username and empty password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByRole('button', { name: 'Login' }).click()
})


test('add to cart', async ({ page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button', { name: 'Login' }).click()
    await page.getByRole('button', { name: 'Add to cart' }).first().click()
    await page.locator('.shopping_cart_link').click()
    await page.getByRole('button', { name: 'Checkout' }).click()
    await page.getByPlaceholder('First Name').fill('Potato')
    await page.getByPlaceholder('Last Name').fill('Test')
    await page.getByPlaceholder('Zip/Postal Code').fill('00001')
    await page.getByRole('button', { name: 'Continue' }).click()
    await page.getByRole('button', { name: 'Finish' }).click()
    await expect(page.getByText('Thank you for your order!')).toBeVisible()
})

test('log out', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button', { name: 'Login' }).click()
    await page.getByText('Open Menu').click()
    await page.getByText('Logout').click()
})