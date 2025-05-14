const { text } = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
}); //в цій схемі ми не передаємо другим параметром "{ timestamps: true }", так як ми беремо вже готові створенн дані у базі

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;