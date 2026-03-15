const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('nodePortHardCode running on 8080');
});

app.listen(PORT, () => {
  console.log(`nodePortHardCode listening on ${PORT}`);
});
