const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 8000
const app = express()

async function start() {
  try {
    await mongoose.connect('mongodb+srv://maxim:trifonmax@cluster0-d10qd.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useFindAndModify: false
    })
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

start()