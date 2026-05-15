const { test, expect } = require('@playwright/test');

// Test data array
const loginData = [
    { username: 'tomsmith', password: 'SuperSecretPassword!' },
    { username: 'invalidUser', password: 'wrongPassword' }
];

for (const data of loginData) {
    test(`Checking Login form with ${data.username}`, async ({ page }) => {
        // Using a public practice site instead of localhost
        await page.goto('https://the-internet.herokuapp.com/login');

        // Locators
        const usernameInput = page.locator("#username");
        const passwordInput = page.locator("#password");
        const loginButton = page.locator('button[type="submit"]');

        // Actions
        await usernameInput.fill(data.username);
        await passwordInput.fill(data.password);
        await loginButton.click();

        // Verification
        if (data.username === 'tomsmith') {
            await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
        } else {
            await expect(page.locator('#flash')).toContainText('Your username is invalid!');
        }
    });
}