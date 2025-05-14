const { text } = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    } 
}, { timestamps: true }); //ці дані будуть автоматично присвоватись кожному створеному посту щоб вони відображались в базі

const Post = mongoose.model('Post', postSchema);

module.exports = Post;