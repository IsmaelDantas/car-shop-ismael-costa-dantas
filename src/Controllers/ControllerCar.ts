import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import ServiceCar from '../Services/ServiceCar';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: ServiceCar;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new ServiceCar();
  }

  public create = async () => {
    const car: ICar = this.req.body;
    try {
      const carNew = await this.service.carCreate(car);
      return this.res.status(201).json(carNew);
    } catch (error) {
      this.next(error);
    }
  };
  public allGet = async () => {
    try {
      const { message, status } = await this.service.allGet();
      return this.res.status(status).json(message);
    } catch (error) {
      this.next(error);
    }
  };
  public idGetBy = async () => {
    const { id } = this.req.params;

    try {
      const car = await this.service.idGetBy(id);

      if (!car) return this.res.status(404).json({ message: 'Car not found' });

      return this.res.status(200).json(car);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  };
  public update = async () => {
    const { id } = this.req.params;
    const changedCar = this.req.body;
    try {
      const updatedCar = await this.service.carUpdate(id, changedCar);

      if (!updatedCar) return this.res.status(404).json({ message: 'Car not found' });

      return this.res.status(200).json(updatedCar);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  };
}