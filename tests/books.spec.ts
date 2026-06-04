import { test, expect } from '@playwright/test';

test("Book page is available", async ({ request }) => {
    const res = await request.get('/books');
    expect(res.status()).toBe(200);
})

test("There are eight book listed", async ({ request }) => {
    const res = await request.get('/books')
    const data = await res.json()
    expect(data.books).toHaveLength(8)
})

test("All proporties are available for the book", async({request}) => {
    const res = await request.get('/books')
    const data = await res.json()
    data.books.forEach((book: any) => {
        expect(book).toHaveProperty("isbn")
        expect(book.isbn).toBeTruthy()
        expect(book).toHaveProperty("title")
        expect(book.title).toBeTruthy()
        expect(book).toHaveProperty("subTitle")
        expect(book.subTitle).toBeTruthy()
        expect(book).toHaveProperty("author")
        expect(book.author).toBeTruthy()
        expect(book).toHaveProperty("publish_date")
        expect(book.publish_date).toBeTruthy()
        expect(book).toHaveProperty("publisher")
        expect(book.publisher).toBeTruthy()
        expect(book).toHaveProperty("pages")
        expect(book.pages).toBeTruthy()
        expect(book).toHaveProperty("description")
        expect(book.description).toBeTruthy()
        expect(book).toHaveProperty("website")
        expect(book.website).toBeTruthy()

    })
})