const express = require('express');
const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.get('/', (req, res) => {
  throw new Error('Intentional error');
});

app.use((err, req, res, next) => {
  console.error('Caught error:', err.message);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`errorHandling listening on ${PORT}`);
});
