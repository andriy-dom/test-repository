const Post = require('../models/post');//дві крапки тому, що ми знаходимось не в корні проекта www


const getPost =  (req, res) => { 
    res.render('post', {
        username: '',
        title: '',
        text: ''
    });
};


const addPost = async (req, res) => {
    try {
        const { username, title, text } = req.body;

        // Зберігаємо дані в базу
        const post = await Post.create({ username, title, text });

        // Показуємо сторінку з даними (передаємо їх прямо у шаблон)
        res.render('post', {
            username: post.username,
            title: post.title,
            text: post.text
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Помилка сервера');
    }
};


const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.render('posts', { posts });
    } catch (error) {
        console.error(error);
        res.status(500).send('Помилка при отриманні постів');
    }
};


const getEditPost =  async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.render('editPost', { post });
    } catch (err) {
        console.error(err);
        res.status(404).send('Пост не знайдено');
    }
};


const updatePost = async (req, res) => {
    const { username, title, text } = req.body;
    try {
        await Post.findByIdAndUpdate(req.params.id, { username, title, text });
        res.redirect('/posts');
    } catch (err) {
        console.error(err);
        res.status(500).send('Помилка оновлення');
    }
};


const deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.redirect('/posts');
    } catch (err) {
        console.error(err);
        res.status(500).send('Помилка видалення');
    }
};

module.exports = {
    getPost,
    addPost,
    getPosts,
    getEditPost,
    updatePost,
    deletePost
}

