import { test, expect } from '@playwright/test';

test("Form page is available", async ({ request }) => { 
    const res = await request.get("/forms");
    expect(res.status()).toBe(200);
});