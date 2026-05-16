// day_14/tests/cal.spec.mjs
import { test, expect } from '@playwright/test';

// 1. Wrap your code inside a formal test block
test('Verify calculator functionality', async ({ page }) => {
    
    // If you are just testing pure JS logic (no browser needed):
    const a = 2;
    const b = 3;
    const sum = a + b;
    
    console.log(`The result is: ${sum}`); // This will print 5 inside the test execution
    
    // Use Playwright's expect assertion to validate the result
    expect(sum).toBe(5);
    
    /* 
    // If you eventually want to test a UI calculator website, uncomment this:
    await page.goto('https://www.google.com/search?q=calculator');
    await page.locator('div[role="button"]:has-text("5")').click();
    */
});