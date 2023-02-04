import express from 'express';
import routeCar from './route.car';

const routes = express.Router();

routes.use('/cars', routeCar);

export default routes;