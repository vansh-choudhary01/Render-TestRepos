// @ts-nocheck
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', project: 'typescriptBackend' });
});

app.listen(PORT, () => {
  console.log(`typescriptBackend listening on ${PORT}`);
});
