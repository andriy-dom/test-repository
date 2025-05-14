const Contact = require('../models/contacts');

const getContacts = (req, res) => {  //отримання даних з бази
    const title = 'Contacts';
    Contact
      .find()
      .then((contacts) => {
        res.render('contacts', { contacts, title });
      })
      .catch((error) => {
        console.log(error);
        res.send('Something going wrong');
      });
};

module.exports = {
    getContacts
}