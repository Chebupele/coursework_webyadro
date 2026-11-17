import { Router } from 'express';

const health = Router();

health.get('/health', (_request, response) => {
  response.json({ status: 'ok' });
});

export default health;
