import express from 'express';
import ControllerMoto from '../Controllers/ControllerMoto';

const routeMoto = express.Router();

routeMoto.post('/', (req, res, next) => new ControllerMoto(req, res, next).create());
// routeMoto.get('/', (req, res, next) => new ControllerMoto(req, res, next).getAll());
// routeMoto.get('/:id', (req, res, next) => new ControllerMoto(req, res, next).getById());
// routeMoto.put('/:id', (req, res, next) => new ControllerMoto(req, res, next).update());

export default routeMoto;