const Blogs = require('../models/Blogs')

const Getblogs = async (req, res, next) => {
    const blogs = await Blogs.find()
    res.send(blogs)
}

module.exports = Getblogs