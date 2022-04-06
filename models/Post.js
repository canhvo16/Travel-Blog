const { Schema } = require('mongoose')

const Posts = new Schema(
    {
        author: { type: String, required: false },
        description: { type: String, required: true },
        title: { type: String, requiredL: true }
    },
    { timestamps: true }
)

module.exports = Posts