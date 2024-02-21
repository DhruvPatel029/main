const express = require('express');
const { query } = require('express-validator');
const app = express();

app.use(express.json());
app.get('/hello', query('person').notEmpty(), (req, res) => {
  res.send(`Hello, ${req.query.person}!`);
});

