const express = require('express') // Підключаємо фреймворк Express
const { 
    getPost,
    addPost,
    getPosts,
    getEditPost,
    updatePost, 
    deletePost
} = require('../controllers/post-controller');

const router = express.Router();

router.get('/post', getPost);
router.post('/check-user', addPost);
router.get('/posts', getPosts);
router.get('/posts/edit/:id', getEditPost);
router.post('/posts/update/:id', updatePost);
router.post('/posts/delete/:id', deletePost );

module.exports = router;