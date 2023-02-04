import { NextFunction, Request, Response } from 'express';
import ICars from '../Interfaces/ICars';
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
    const car: ICars = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
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
      const { message, status } = await this.service.idGetBy(id);
      return this.res.status(status).json({ message });
    } catch (error) {
      this.next(error);
    }
  };
}