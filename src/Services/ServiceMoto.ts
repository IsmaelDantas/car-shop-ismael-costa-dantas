import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoODM from '../Models/MotoODM';

export default class MotorCycle {
  private domainMotoCreate = (moto: IMotorcycle): Motorcycle | null => {
    if (moto) {
      return new Motorcycle(moto);
    }

    return null;
  };

  public motoCreate = async (moto: IMotorcycle) => {
    const ODMcar = new MotoODM();

    const createdCar = await ODMcar.create({
      ...moto,
      status: moto.status || false,
    });
    
    return this.domainMotoCreate(createdCar);
  };
}