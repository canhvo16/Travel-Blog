const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Travel Blog Landing page'))

router.get('/getAllPost', controllers.getAllPost)
router.get('/comment/:id', controllers.getCommentByPostId)

module.exports = router