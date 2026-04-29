import { test, expect } from '@playwright/test'

test('GET - fetch a single post', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1')
    
    expect(response.status()).toBe(200)
    
    const body = await response.json()
    expect(body.id).toBe(1)
})


test('POST - create a new post', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'Test Post',
            body: 'This is a test post',
            userId: 1
        }
    })

    expect(response.status()).toBe(201)

    const body = await response.json()
    expect(body.title).toBe('Test Post')
    expect(body.id).toBeTruthy()
})


test('PUT - update a post', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            id: 1,
            title: 'Updated Post',
            body: 'This is an updated post',
            userId: 1
        }
    })

    expect(response.status()).toBe(200)

    const body = await response.json()
    expect(body.title).toBe('Updated Post')
})

test('DELETE - delete a post', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1')
    
    expect(response.status()).toBe(200)
})