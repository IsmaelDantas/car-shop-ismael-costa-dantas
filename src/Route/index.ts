import express from 'express';
import routeCar from './route.car';
import routeMoto from './route.moto';

const routes = express.Router();

routes.use('/cars', routeCar);
routes.use('/motorcycles', routeMoto);

export default routes;