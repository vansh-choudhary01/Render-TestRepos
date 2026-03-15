require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('logging server');
});

app.listen(PORT, () => {
  console.log(`logging listening on ${PORT}`);
});
