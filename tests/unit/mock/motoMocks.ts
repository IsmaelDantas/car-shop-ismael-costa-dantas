import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const MOTO = 'Honda Cb 600f Hornet';
const mockInputMoto: IMotorcycle = {
  model: MOTO,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const mockOutputMoto = [{
  id: '6348513f34c397abcad040b2',
  model: MOTO,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
},
{
  id: '6348513f34c397abcad040b2',
  model: MOTO,
  year: 2005,
  color: 'Black',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
}];

const motoWithoutStatusMock: IMotorcycle = {
  model: MOTO,
  year: 2005,
  color: 'Yellow',
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export { mockInputMoto, mockOutputMoto, motoWithoutStatusMock };