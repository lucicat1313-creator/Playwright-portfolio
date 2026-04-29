import { test, expect } from '@playwright/test'

test('Java delays', async ({ page }) => {
    await page.goto('https://practice-automation.com/javascript-delays/')
    await page.getByRole('button', { name: 'Start' }).click()
    await expect(page.getByText('Liftoff!')).toBeVisible()

})

test('Form fields', async ({ page }) => {
    await page.goto('https://practice-automation.com/form-fields/')
    await page.getByTestId('name-input').fill('Potato test')
    await page.getByLabel('Password').fill('Potato123')
    await page.getByTestId('drink1').check()
    await page.getByTestId('drink2').check()
    await page.getByTestId('drink3').check()
    await page.getByTestId('drink4').check()
    await page.getByTestId('drink4').uncheck()
    await page.getByTestId('color2').check()
    await page.getByTestId('automation').selectOption('Yes')
    await page.getByTestId('email').fill('potato@example.com')
    await page.getByTestId('message').fill('This is a test message')
    await page.getByTestId('submit-btn').click()
})

test('Popups', async ({ page }) => {
    await page.goto('https://practice-automation.com/popups/')
    page.on('dialog', dialog => dialog.accept())
    await page.locator('#alert').click()
    await page.locator('#confirm').click()
    await page.locator('#prompt').click()
    await page.getByText('click me to see a tooltip').click()
    await page.getByText('click me to see a tooltip').click()
})

test('Sliders', async ({ page }) => {  // Slider click exact value
    await page.goto('https://practice-automation.com/slider/')
    await page.locator('#slideMe').fill('75')
    await page.locator('#slideMe').dispatchEvent('input')
})

test('Sliders 2', async ({ page }) => {
    await page.goto('https://practice-automation.com/slider/')
    
    const slider = page.locator('#slideMe')
    const box = await slider.boundingBox()
    if (!box) throw new Error('Slider not found')
    
    await page.mouse.move(box.x + box.width * 0.25, box.y + box.height / 2)
    await page.mouse.down()
    await page.mouse.move(box.x + box.width * 0.75, box.y + box.height / 2)
    await page.mouse.up()
    
})

test('Calendars', async ({ page }) => {
    await page.goto('https://practice-automation.com/calendars/')
    const datePicker = page.locator('#g1065-1-selectorenteradate')
    await datePicker.fill('2026-04-23')
    await page.getByRole('button', { name: 'Submit' }).click()
})

test('Modal', async ({ page }) => {
    await page.goto('https://practice-automation.com/modals/')
    await page.locator('#simpleModal').click()
    await expect(page.locator('#popmake-1318')).toBeVisible()
    await page.locator('#popmake-1318').locator('.pum-close').click()
    await expect(page.locator('#popmake-1318')).toBeHidden()
})


test('Modal 2', async ({ page }) => {
    await page.goto('https://practice-automation.com/modals/')
    await page.locator('#formModal').click()
    await expect(page.locator('#popmake-674')).toBeVisible()
    await page.locator('#g1051-name').fill('Potato test')
    await page.waitForTimeout(500)
    await page.locator('#g1051-email').fill('potato@example.com')
    await page.waitForTimeout(500)
    await page.locator('#contact-form-comment-g1051-message').fill('This is a test message for the modal')
    await page.getByRole('button', { name: 'Submit' }).click()
    
})

test('Tables', async ({ page }) => {
    await page.goto('https://practice-automation.com/tables/')
    await page.locator('button[data-dt-idx="1"]').click()
    await page.locator('#dt-length-0').selectOption('25')
    await page.locator('#dt-search-0').click()
    await page.locator('#dt-search-0').fill('Japan')
})


test('Window Operations', async ({ page }) => {
    await page.goto('https://practice-automation.com/window-operations/')
    await page.getByRole('button', { name: 'New Window' }).click()
    await page.getByRole('button', { name: 'New Tab' }).click()
    await page.getByRole('button', { name: 'Replace Window' }).click()
})  

test('Hover', async ({ page }) => {
    await page.goto('https://practice-automation.com/hover/')
    await page.locator('#mouse_over').hover()
})

test('Ads', async ({ page }) => {
    await page.goto('https://practice-automation.com/ads/')
    await page.waitForSelector('#popmake-1272', { timeout: 10000 })
    await expect(page.locator('#popmake-1272')).toBeVisible()
    await page.locator('#popmake-1272').locator('button[aria-label="Close"]').click()
})

test('Gestures', async ({ page }) => {
    await page.goto('https://practice-automation.com/gestures/')
     const dragElement = page.locator('#moveMeHeader')
    const box = await dragElement.boundingBox()
    if (!box) throw new Error('Element not found')

    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
    await page.mouse.down()
    await page.mouse.move(221, 570)
    await page.mouse.up()
})

test('File Download', async ({ page }) => {
    await page.goto('https://practice-automation.com/file-download/')
    const downloadPromise = page.waitForEvent('download')
    await page.getByRole('link', { name: 'Download' }).nth(2).click()
    const download = await downloadPromise
    await download.saveAs('downloads/' + download.suggestedFilename())
})

test('Click events', async ({ page }) => {
    await page.goto('https://practice-automation.com/click-events/')
    await page.getByText('Cat').click()
    await expect(page.getByText('Meow!')).toBeVisible()
    await page.getByText('Dog').click()
    await expect(page.getByText('Woof!')).toBeVisible()
    await page.getByText('Pig').click()
    await expect(page.getByText('Oink!')).toBeVisible()
    await page.getByText('Cow').click()
})

test('Spinner', async ({ page }) => {
    await page.goto('https://practice-automation.com/spinner/')
    await expect(page.locator('.spinner-hidden')).toBeHidden()
})


test('File Upload - no file', async ({ page }) => {
    await page.goto('https://practice-automation.com/file-upload/')
    await page.locator('#upload-btn').click()
    await expect(page.getByText('Please fill out this field.').first()).toBeVisible()
})

test('File Upload - with file', async ({ page }) => {
    await page.goto('https://practice-automation.com/file-upload/')
    await page.locator('input[type="file"]').setInputFiles('tests/fixtures/FileUploadTestFile.txt')
    await page.locator('#upload-btn').click()
    await expect(page.getByRole('status')).toBeVisible()
})


test('iFrame', async ({ page }) => {
    await page.goto('https://practice-automation.com/iframes/')
    const iframe = page.frameLocator('#iframe-1')
    await iframe.getByRole('link', { name: 'Docs' }).click()
})

