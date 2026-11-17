import express from 'express';
import health from './routes/health.js';

const app = express();

app.disable('x-powered-by');
app.use('/api/v1', health);
app.use('/api/v1', (_request, response) => {
  response.status(404).json({ message: 'Маршрут не найден' });
});

export default app;
