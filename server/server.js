const express = require('express');
const app = express();
require('dotenv').config();
const expressJWT = require('express-jwt');
const port = 5678;
const mongoose = require('mongoose');

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/geoff-blog', {useNewUrlParser: true}).then(() => {
  console.log('Connected to MongoDB!')
})

app.listen(port, () => {
  console.log(`server up on ${port}!`)
})