const express = require('express') // Підключаємо фреймворк Express
const app = express() // Створюємо екземпляр додатка Express
const mongoose = require('mongoose');
const postRoutes = require('./routes/post-routes');
const contactRoutes = require('./routes/contact-routes');


//шаблонізатор потрібен для того щоб був більший функціонал з html файлом
app.set('view engine', 'ejs') // Вказуємо, що будемо використовувати шаблонізатор EJS. Метод set призначений для того 
//щоб встановлювати різні настройки в наш додаток
const db = 'mongodb+srv://Andrii:and123and123@cluster0.lt50un7.mongodb.net/node-blog?retryWrites=true&w=majority&appName=Cluster0';
mongoose
  .connect(db)
  .then((res) => console.log('Connected to DB'))
  .catch((error) => console.log(error));

app.use(express.urlencoded({ extended: false })) // Додаємо middleware для коректного отримання даних з форм (парсимо body запитів)
app.use(express.static('styles')) // Робимо папку "styles" доступною для статичних файлів (CSS, зображення, JS тощо)

app.get('/', (req, res) => { // Обробляємо GET-запит на головну сторінку
    res.render('index') // Відображаємо шаблон "index.ejs"
})

app.get('/about', (req, res) => { // Обробляємо GET-запит на сторінку "Про нас"
    res.render('about') // Відображаємо шаблон "about.ejs"
})


app.use(postRoutes);
app.use(contactRoutes);


app.use((req, res) => {   //не передаємо шлях, бо ми незнаємо що введе користувач
        res
          .status(404)
          .send(('Something going wrong..'));//я передав тут 'статичні дані'. Краще було б зробити html файл
                                            //  з повідомленням про помилку і відправляти його
    }); 

const PORT = 3011 // Встановлюємо порт для сервера

app.listen(PORT, () => { // Запускаємо сервер на вказаному порту
    console.log(`Server started: http://localhost:${PORT}`) // Виводимо в консоль повідомлення про запуск
})

