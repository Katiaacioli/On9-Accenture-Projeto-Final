const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

const index = require('./routes/index')
const users = require('./routes/user')
const vaccines = require('./routes/vaccine')
const admin = require('./routes/admin')
const login = require('./routes/login')

const app = express()

mongoose.connect(`${process.env.DATABASE}`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', index)
app.use('/users', users)
app.use('/vaccines', vaccines)
app.use('/admin', admin)
app.use('/login', login)


module.exports = app