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
    const ODMmoto = new MotoODM();

    const motoCreated = await ODMmoto.create({
      ...moto,
      status: moto.status || false,
    });
    
    return this.domainMotoCreate(motoCreated);
  };
  public allGet = async () => {
    const ODMmoto = new MotoODM();
    const motos = await ODMmoto.allGet();

    return { status: 200, message: motos };
  };

  public idGetBy = async (id: string) => {
    const ODMmoto = new MotoODM();
    const moto = await ODMmoto.idGetBy(id);
    return moto;
  };
  public motoUpdate = async (id: string, motoChanged: IMotorcycle) => {
    const ODMmoto = new MotoODM();

    const updatedMoto = await ODMmoto.update(id, motoChanged);
    if (!updatedMoto) {
      return null;
    }
    return {
      id,
      ...motoChanged,
    };
  };
  public motoDelete = async (id: string) => {
    const ODMmoto = new MotoODM();

    const motorcycle = await this.idGetBy(id);

    if (!motorcycle) return { message: 'Motorcycle not found' };
    
    await ODMmoto.delete(id);

    return null;
  };
}