require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const SECRET = 'jwt-secret-example';

app.use(express.json());

app.get('/login', (req, res) => res.send("/login"));
app.get('/', (req, res) => res.send("good morning backend));

app.post('/login', (req, res) => {
  const token = jwt.sign({ user: 'test-user' }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

app.get('/secure', (req, res) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).send('Unauthorized');

  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    res.json({ message: 'secure data', decoded });
  } catch (err) {
    res.status(401).send('Invalid token');
  }
});

app.listen(PORT, () => {
  console.log(`jwtAuth listening on ${PORT}`);
});
