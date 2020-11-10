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
  test('a valid blog can be added', async () => {
    const newBlog = {
        title: 'valid blog',
        author: "vb",
        url: "www.validblog.com",
        likes: 22
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const blogs = await Blog.find({})

    expect(blogs).toHaveLength(initialBlogs.length + 1)

    const authors = blogs.map(aut => aut.author)

    expect(authors).toContain(
      newBlog.author
    )


  })
  test('if no likes, default to 0', async () => {
    const newBlog = {
        title: 'blog with no likes',
        author: "Bad Author",
        url: "www.unlikeable.com",
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/)

   const blogs = await Blog.find({})

   expect(blogs[initialBlogs.length].likes).toBe(0)
})
test('blog needs title and url', async () => {
    const newBlog = {
        author: "author"
    }
  
    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)
  
    const blogs = await Blog.find({})
  
    expect(blogs).toHaveLength(initialBlogs.length)
  })
  test('succeeds with status code 204 if id is valid', async () => {
    const blogs = await Blog.find({})
    const blogToDelete = blogs[0]
  
    await api
              .delete(`/api/blogs/${blogToDelete.id}`)
              .expect(204)
  
    const blogsAtEnd = await Blog.find({})  
  
    expect(blogsAtEnd).toHaveLength(
        initialBlogs.length - 1
  )
  
    const blog = blogsAtEnd.map(b => b.title)
  
    expect(blog).not.toContain(blogToDelete.title)
  })

  
  

afterAll(() => {
    mongoose.connection.close()

})