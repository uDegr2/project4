const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const fetch = require('node-fetch');
var FormData = require('form-data')
const dotenv = require('dotenv')

dotenv.config()


const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(express.static('dist'))


app.post('/apiCall', async (req, res) => {


  console.log("debug test")
  let formText = req.body.url;
  const lang = 'en';
  let apiKey = process.env.API_KEY
  console.log(formText);
  console.log(apiKey)

  let form = new FormData();
  form.append("key", apiKey);
  form.append("url", formText);
  form.append("lang", lang);

  const requestOptions = {
      method: 'POST',
      body: form,
      redirect: 'follow'
  };

  const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
      .then(response => response.json())
      .then(data => res.send(data))
      .catch(error => console.log('error', error));
}
)

app.listen(3000)