const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Travel Blog Landing page'))

router.get('/getAllPost', controllers.getAllPost)
router.get('/comment/:id', controllers.getCommentByPostId)
router.post('/newPost', controllers.createPost)
router.post('/newComment', controllers.createComment)

module.exports = router
