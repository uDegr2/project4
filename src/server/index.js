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


app.post('/apiCall', async (req, res) => {


  console.log("debug test")
  const formText = req.body.url;
  const lang = 'en';
  const apiKey = process.env.API_KEY;

  const formData = new FormData();
  formData.append("key", apiKey);
  formData.append("url", formText);
  formData.append("lang", lang);

  const requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow'
  };

  const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
      .then(response => response.json())
      .then(data => res.send(data))
      .catch(error => console.log('error', error));
}
)

app.listen(3000)