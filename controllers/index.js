const { Post, Review } = require('../models')

const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find()
    return res.status(200).json({ posts })
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

const getCommentByPostId = async (req, res) => {
  try {
    const comments = await Review.find({ post: req.params.id })
    return res.status(200).json({ comments })
  } catch (err) {
    return res.status(500).send(err.message)
  }
}

module.exports = {
  getAllPost,
  getCommentByPostId
}
