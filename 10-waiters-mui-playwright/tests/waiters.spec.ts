import {expect, test} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:3000/waiters');
});

test('verify that "Waiters" page has correct title', async ({page}) => {
    const pageTitle = 'Waiters List'
    const heading = page.getByRole('heading', {name: pageTitle})

    await expect(heading).toBeVisible();
    await expect(heading).toContainText(pageTitle);
});

test('should display 3 waiters after loading', async ({page}) => {
    const WAITERS = [
        {
            "id": 1,
            "firstName": "John",
            "phone": "123-5423-453"
        },
        {
            "id": 2,
            "firstName": "Lucy",
            "phone": "654-223-555"
        },
        {
            "id": 5,
            "firstName": "Zack",
            "phone": "8753489233"
        },
    ]

    await page.route('*/**/waiters/', async route => {
        await route.fulfill({json: WAITERS});
    });

    const progressbar = page.getByRole('progressbar')

    await page.waitForTimeout(500);
    await expect(progressbar).not.toBeVisible();

    const rows = page.getByRole('row')

    await expect(rows).toHaveCount(3 + 1);
});
