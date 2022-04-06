const db = require('../db')
const { Post } = require('../models')

db.on('error', console.error.bind(console, "Mongodb connection error:"))

const main = async () => {
    
    const post = [
        {
            description: "Paris was awsome",
            title: "Paris Trip"
        }   
    ]

    await Post.create(post)
    console.log('Created Post')
}

const run = async () => {
    await main()
    db.close()
}

run()