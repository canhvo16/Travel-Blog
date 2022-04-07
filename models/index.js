const mongoose = require('mongoose')
const PostSchema = require('./Post')
const ReviewSchema = require('./Review')

const Post = mongoose.model('Post', PostSchema)
const Review = mongoose.model('Review', ReviewSchema)

module.exports = { 
    Post,
    Review
}