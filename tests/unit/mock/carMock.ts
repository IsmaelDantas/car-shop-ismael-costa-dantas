import ICar from '../../../src/Interfaces/ICar';

const mockInputCar: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const mockOutputCar = [{
  id: '1',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
}];

const mockCarWithoutStatus: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export { mockInputCar, mockOutputCar, mockCarWithoutStatus };