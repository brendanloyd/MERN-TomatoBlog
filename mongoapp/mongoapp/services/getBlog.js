const Blogs = require('../models/Blogs')

const getBlog = async (req, res, next) => {
    const id = req.query?.id;
    if (!id) {
        return res.status(400).send('id is required.');
    }

    const blogs = await Blogs.find({ _id: id });

    if (blogs.length === 0) {
        return res.status(204).send('id not found.');
    }

    return res.status(200).send(blogs[0]);
}

module.exports = getBlog