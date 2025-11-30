import { test, expect } from '@playwright/test'

test.describe('Demo App Landing', () => {
  test('should load the demo page', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/WasteWise|Demo/)
  })

  test('should have main content visible', async ({ page }) => {
    await page.goto('/')

    // Check that the page has loaded with content
    await expect(page.locator('body')).toBeVisible()

    // Check for any heading
    const heading = page.locator('h1, h2').first()
    await expect(heading).toBeVisible()
  })

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    // Page should still load correctly on mobile
    await expect(page.locator('body')).toBeVisible()
  })

  test('should be responsive on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/')

    // Page should still load correctly on tablet
    await expect(page.locator('body')).toBeVisible()
  })
})

test.describe('Demo App Navigation', () => {
  test('should have navigation elements', async ({ page }) => {
    await page.goto('/')

    // Check for navigation presence
    const nav = page.locator('nav, header')
    await expect(nav.first()).toBeVisible()
  })

  test('should navigate without errors', async ({ page }) => {
    await page.goto('/')

    // Check for console errors
    const errors: string[] = []
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    // Wait for page to fully load
    await page.waitForLoadState('networkidle')

    // Filter out expected errors (like favicon not found)
    const criticalErrors = errors.filter(e => !e.includes('favicon'))
    expect(criticalErrors).toHaveLength(0)
  })
})

test.describe('Demo App Performance', () => {
  test('should load within acceptable time', async ({ page }) => {
    const startTime = Date.now()
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')
    const loadTime = Date.now() - startTime

    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000)
  })
})
