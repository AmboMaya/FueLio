const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const {getPrices} = require('./rawData')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/bestprice', (req, res) => {
  res.send(getPrices());
});


app.listen(port, () => console.log(`Listening on port ${port}`));