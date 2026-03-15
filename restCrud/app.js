const express = require('express');
const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(express.json());
let items = [];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const item = { id: Date.now(), ...req.body };
  items.push(item);
  res.status(201).json(item);
});

app.put('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index < 0) return res.status(404).send('Not found');
  items[index] = { ...items[index], ...req.body };
  res.json(items[index]);
});

app.delete('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  items = items.filter(i => i.id !== id);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`restCrud listening on ${PORT}`);
});
