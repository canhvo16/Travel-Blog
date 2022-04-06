const { Schema } = require('mongoose')

const Reviews = new Schema(
  {
    post: { type: Schema.ObjectId, ref: 'post' },
    review: { type: String, required: true },
    likes: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = Reviews
