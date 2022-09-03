const express = require('express')
const app = express()
const { corsOptionsRequests, corsSimpleRequests } = require('./middleware/cors')
const bodyParser = require('body-parser')
const removePoweredBy = require('./middleware/removePoweredBy')
const CreateBlog = require('./services/createBlog')
const Getblogs = require('./services/getBlogs')
const getBlog = require('./services/getBlog')
const updateBlog = require('./services/updateBlog')
const deleteBlog = require('./services/deleteBlog')


app.options('*', corsOptionsRequests)
app.use(corsSimpleRequests)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(removePoweredBy)


app.get('/blogEntries', Getblogs)
app.get('/blogEntry', getBlog)
app.post('/createBlog', CreateBlog)
app.post('/updateBlog', updateBlog)
app.post('/deleteBlog', deleteBlog)



module.exports = app  