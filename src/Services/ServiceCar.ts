import { isValidObjectId } from 'mongoose';
import Cars from '../Domains/Cars';
import ICars from '../Interfaces/ICars';
import CarODM from '../Models/CarODM';

export default class CarService {
  private carDomainCreate = (car: ICars): Cars | null => {
    if (car) {
      return new Cars(car);
    }
    return null;
  };
  public carCreate = async (car: ICars) => {
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
    if (!isValidObjectId(id)) return { status: 422, message: 'Invalid mongo id' };
    const carODM = new CarODM();
    const car = await carODM.idGetBy(id);

    if (!car) {
      return { status: 404, message: 'Car not found' };
    }
    return { status: 200, message: car };
  };
}