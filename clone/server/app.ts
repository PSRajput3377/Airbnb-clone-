import express, { Application } from 'express';
import cors from 'cors';
import propertyRoutes from './routes/propertyRoutes';

const app: Application = express();

// Basic CORS configuration for development
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://airbnb-clone-iota-plum.vercel.app',
  ],
  methods: ['GET'],
  credentials: true,
}));
// JSON parsing middleware
app.use(express.json());

// API routes
app.use('/api/property', propertyRoutes);

// Health check endpoint
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

export default app;
