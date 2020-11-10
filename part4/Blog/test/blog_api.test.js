const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const initialBlogs = [
    {
        title: 'test',
        author: "The Name",
        url: 'www.zaman.com',
        likes: 34
    },
    {
       
        title: 'test2',
        author: "The Name",
        url: 'www.address.com',
        likes: 44
    },
]
beforeEach(async () => {
    await Blog.deleteMany({})
    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()
    //jest.setTimeout(99999999)
    blogObject = new Blog(initialBlogs[1])
    await blogObject.save()
})

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})
test('correct amount of blogs', async () => {
    const response = await api.get('/api/blogs')

})
test('unique identifier named id', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
  
  })
  

afterAll(() => {
    mongoose.connection.close()

})