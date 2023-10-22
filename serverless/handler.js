import serverless from 'serverless-http';
import app from './app.js';

export const root = serverless(app);
