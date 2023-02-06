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
      const moto = await this.service.idGetBy(id);

      if (!moto) return this.res.status(404).json({ message: 'Motorcycle not found' });

      return this.res.status(200).json(moto);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  };
}