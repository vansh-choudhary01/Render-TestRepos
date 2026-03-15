require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.get('/', (req, res) => {
  res.send('dockerDeploy live');
});

app.listen(PORT, () => {
  console.log(`dockerDeploy listening on ${PORT}`);
});
