import { test, expect } from '@playwright/test';

test('BookStore API is alive', async ({ request }) => {
  const res = await request.get('/BookStore/v1/Books');
    expect(res.status()).toBe(200);
    console.log(res.json());

});

test("See all books available ", async ({ request }) => {
  const response = await request.get("/BookStore/v1/Books");
  const body = await response.json();
  console.log("Books returned:", body.books.length);
  console.log("First book:", body.books[0]);
  // assert the shape
  expect(body.books).toBeInstanceOf(Array);
  expect(body.books.length).toBeGreaterThan(0);
  expect(body.books[0]).toHaveProperty("isbn");
  expect(body.books[0]).toHaveProperty("title");
});