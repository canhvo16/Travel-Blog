const db = require('../db')
const { Review, Post } = require('../models')

db.on('error', console.error.bind(console, 'Mongodb connection error:'))

const main = async () => {
  const paris = await Post.find({ title: 'Paris Trip' })

  const review = [
    {
      post: [paris[0]._id],
      review: 'Can you tell me more?',
      likes: 0
    }
  ]

  await Review.create(review)
  console.log('Created review')
}

const run = async () => {
  await Review.deleteMany()
  await main()
  db.close()
}

run()
