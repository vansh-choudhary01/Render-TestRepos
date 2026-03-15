require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

function requestLogger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(requestLogger);
app.use((req, res, next) => {
  req.customFlag = true;
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'middlewares active', customFlag: req.customFlag });
});

app.listen(PORT, () => {
  console.log(`middlewares listening on ${PORT}`);
});
