const mongoose = require('mongoose');
const express = require('express');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const { NOT_FOUND_ERROR_STATUS } = require('./utils/statusConstants');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '646381bf597b4fb7d7d6bacf',
  };

  next();
});

app.use(userRouter);
app.use(cardRouter);
app.use('*', (req, res) => {
  res.status(NOT_FOUND_ERROR_STATUS).send({ message: 'URL не найден' });
});

app.listen(PORT);
