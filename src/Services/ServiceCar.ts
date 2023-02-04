import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import ExceptionHttp from '../util/exception.http';

export default class CarService {
  private carDomainCreate = (car: ICar): Car | undefined => {
    if (car) {
      return new Car(car);
    }
  };
  public carCreate = async (car: ICar) => {
    const carODM = new CarODM();
    const createdCar = await carODM.create({ ...car, status: car.status || false });
    return this.carDomainCreate(createdCar);
  };
  public allGet = async () => {
    const carODM = new CarODM();
    const cars = await carODM.allGet();

    return { status: 200, message: cars };
  };

  public idGetBy = async (id: string) => {
    if (!isValidObjectId(id)) throw new ExceptionHttp(422, 'Invalid mongo id');
    const carODM = new CarODM();
    const car = await carODM.idGetBy(id);

    if (!car) {
      throw new ExceptionHttp(404, 'Car not found');
    }
    return { status: 200, message: car };
  };
}