import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private carDomainCreate = (car: ICar): Car | null => {
    if (car) {
      return new Car(car);
    }

    return null;
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
    const carODM = new CarODM();

    const car = await carODM.idGetBy(id);

    return car;
  };
  public carUpdate = async (id: string, carChanged: ICar) => {
    const carODM = new CarODM();

    const updatedCart = await carODM.update(id, carChanged);
    if (!updatedCart) {
      return null;
    }
    return {
      id,
      ...carChanged,
    };
  };
  public carDelete = async (id: string) => {
    const ODMcar = new CarODM();
    const car = await this.idGetBy(id);
    if (!car) return { message: 'Car not found' };
    await ODMcar.delete(id);
    return null;
  };
}