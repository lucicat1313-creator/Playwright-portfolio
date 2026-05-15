import { test, expect } from '@playwright/test'

test('Filter by product name', async ({ page }) => {
    await page.goto('https://commitquality.com/')
    await page.getByPlaceholder('Filter by product name').click()
    await page.getByPlaceholder('Filter by product name').fill('The testing product')

})

test('Show more', async ({ page }) => {
    await page.goto('https://commitquality.com/')
    await page.getByRole('button', { name: 'Show more' }).click()
})

test('Add a product', async ({ page }) => {
    await page.goto('https://commitquality.com/')
    await page.getByTestId('add-a-product-button').click()
    await page.getByPlaceholder('Enter a product name').click()
    await page.getByPlaceholder('Enter a product name').fill('The testing product')
    await page.getByPlaceholder('Enter a price').click()
    await page.getByPlaceholder('Enter a price').fill('999')
    await page.getByTestId('date-stocked').fill('2026-04-30')
    await page.getByText('Submit').click()
    await page.waitForTimeout(3000)
    await page.reload()
})

test('Practice tab', async ({ page }) => {
    await page.goto('https://commitquality.com/')
    await page.getByText('Practice').click()
    await page.getByTestId('practice-general').click()
    await page.getByTestId('basic-click').click()
    await page.getByTestId('double-click').dblclick()
    await page.getByTestId('right-click').click({ button: 'right' })
    await page.getByTestId('option1').click()
    await page.getByTestId('option2').click()
    await page.locator('select').selectOption('option3')
    await page.getByTestId('checkbox1').check()
    await page.getByTestId('checkbox2').check()
    await page.getByTestId('checkbox3').check()
    await page.getByText('Go to practice page').click()
})