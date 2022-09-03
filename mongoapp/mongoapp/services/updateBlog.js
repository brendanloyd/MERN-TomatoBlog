const Blogs = require('../models/Blogs')

const UpdateBlog = async (req, res, next) => {
    console.log(req);
    const { id, updates } = req.body;

    if (!id || !updates) {
        return res.status(400).send('id and updates are required.');
    }

    try {
        const results = await Blogs.updateOne({ _id: id }, updates);
        return res.status(200).send(results);
    } catch (e) {
        return res.status(500).send(e);
    }
}

module.exports = UpdateBlog