const Blogs = require('../models/Blogs')

const DeleteBlog = async (req, res, next) => {

    const id = req.body?.id;
    if (!id) {
        return res.status(400).send('id is required.');
    }

    const results = await Blogs.deleteOne({ _id: id })

    return res.status(200).send(results);
}

module.exports = DeleteBlog