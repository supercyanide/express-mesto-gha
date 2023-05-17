const mongoose = require('mongoose');
const express = require('express');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '646381bf597b4fb7d7d6bacf',
    // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
});

app.use(userRouter);
app.use(cardRouter);

app.listen(PORT);
