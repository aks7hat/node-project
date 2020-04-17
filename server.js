const express = require('express')

const { db } = require('./db')
const todoRoute = require('./routes/todos')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(__dirname + '/public'))

app.use('/todos', todoRoute)

db.sync()
  .then(() => {
    const server_port=process.env.PORT || 3333
    app.listen(server_port)
  })
  .catch((err) => {
    console.error(err)
  })