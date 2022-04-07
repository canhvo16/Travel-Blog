const db = require('../db')
const { Post } = require('../models')

db.on('error', console.error.bind(console, 'Mongodb connection error:'))

const main = async () => {
  const post = [
    {
      description: 'Paris was awesome!!!',
      title: 'Paris Trip',
      likes: 0
    }
  ]

  await Post.create(post)
  console.log('Created Post')
}

const run = async () => {
  await Post.deleteMany()
  await main()
  db.close()
}

run()
