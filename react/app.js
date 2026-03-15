require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/health', (req, res) => {
  res.json({status:'ok', project:'react'});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`react backend listening on ${PORT}`);
});
