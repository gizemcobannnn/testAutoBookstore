import { test, expect } from '@playwright/test';

test("Book page is available", async ({ request }) => {
    const res = await request.get('/books');
    expect(res.status()).toBe(200);
})