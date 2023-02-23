const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')


const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(express.static('dist'))


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)