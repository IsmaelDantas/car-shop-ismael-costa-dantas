import express from 'express';
import ControllerMoto from '../Controllers/ControllerMoto';

const routeMoto = express.Router();

routeMoto.post('/', (req, res, next) => new ControllerMoto(req, res, next).create());
routeMoto.get('/', (req, res, next) => new ControllerMoto(req, res, next).allGet());
routeMoto.get('/:id', (req, res, next) => new ControllerMoto(req, res, next).idGetBy());
routeMoto.put('/:id', (req, res, next) => new ControllerMoto(req, res, next).update());
routeMoto.delete('/:id', (req, res, next) => new ControllerMoto(req, res, next).delete());

export default routeMoto;