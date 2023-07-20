const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const keywordsRoutes = require('./routes/keywords');
const dotenv = require('dotenv').config();
app.use(cors());

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/keywords', keywordsRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log('Server is running, you better catch it!');
});
