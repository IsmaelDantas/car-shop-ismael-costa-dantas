import express from 'express';
import HandleError from './middleware/HandleError';
import route from './Route';

const app = express();
app.use(express.json());
app.use(route);
app.use(HandleError.handle);

export default app;
