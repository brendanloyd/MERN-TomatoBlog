const mongoose = require('mongoose')
 
const BlogSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
})

module.exports = mongoose.model('blogs', BlogSchema)