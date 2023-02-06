import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import ServiceMoto from '../Services/ServiceMoto';

export default class ControllerMoto {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: ServiceMoto;
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new ServiceMoto();
  }
  public create = async () => {
    const moto: IMotorcycle = this.req.body;
    try {
      const motoNew = await this.service.motoCreate(moto);
      return this.res.status(201).json(motoNew);
    } catch (error) {
      this.next(error);
    }
  };
}