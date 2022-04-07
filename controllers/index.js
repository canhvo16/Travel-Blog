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

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body)
    await post.save()
  } catch (error) {
    return res.status(500).send(err.message)
  }
}

const createComment = async (req, res) => {
  try {
    const comment = await new Review(req.body)
    await comment.save()
  } catch (error) {
    return res.status(500).send(err.message)
  }
}

module.exports = {
  getAllPost,
  getCommentByPostId,
  createPost,
  createComment
}
