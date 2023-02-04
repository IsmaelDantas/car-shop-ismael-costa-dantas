import express from 'express';
import ControllerCar from '../Controllers/ControllerCar';

const routeCar = express.Router();

routeCar.post('/', (req, res, next) => new ControllerCar(req, res, next).create());
routeCar.get('/', (req, res, next) => new ControllerCar(req, res, next).allGet());
routeCar.get('/:id', (req, res, next) => new ControllerCar(req, res, next).idGetBy());

export default routeCar;