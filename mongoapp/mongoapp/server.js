require('dotenv').config()
const app = require('./index')
const mongoose = require('mongoose')

const port = 8080

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true}, err => {
  if (err) {
    console.log('Oh No!', err)
    return
  }

  console.log('Connected!')
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})
