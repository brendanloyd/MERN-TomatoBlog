const Blogs = require('../models/Blogs')

const Createblog = async (req, res, next) => {
   try {
       const blogs = new Blogs({
           name: req.body.name,
           title: req.body.title,
           text: req.body.text
       })

       const result = await blogs.save()


       return res.send(result)

   } catch (e) {
       return res.status(400).send('Youre missing something.')
   }

}

module.exports = Createblog