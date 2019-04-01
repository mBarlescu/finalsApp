require('dotenv').config()
const db = require('./queries')

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/hello', db.getUsers)
app.post('/api/world', (req, res) => {
  console.log('wtf man', req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.text}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));