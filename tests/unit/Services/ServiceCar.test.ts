import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ServiceCar from '../../../src/Services/ServiceCar';
import { mockCarWithoutStatus, mockInputCar, mockOutputCar } from '../mock/carMock';

describe('ServiceCar tests', function () {
  describe('/cars route test with GET', function () {
    it('should return all cars at make a get in route /cars', async function () {
      sinon.stub(Model, 'find').resolves(mockOutputCar);
      const service = new ServiceCar();
      const result = await service.allGet();
      expect(result.message).to.be.deep.equal(mockOutputCar);
    });
    it('Should fail make an GET with an invalid ID', async function () {
      sinon.stub(Model, 'findById').resolves(mockOutputCar[0]);
      try {
        const service = new ServiceCar();
        await service.idGetBy('999');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
  });
  describe('/cars route tests with POST', function () {
    it('Should create a new car with sucess', async function () {
      sinon.stub(Model, 'create').resolves(mockOutputCar[0]);
      const service = new ServiceCar();
      const result = await service.carCreate(mockInputCar);
      expect(result).to.be.deep.equal(mockOutputCar[0]);
    });
    it('Should create a carro if status attribute is not passed with sucess', async function () {
      sinon.stub(Model, 'create').resolves(mockOutputCar[0]);
      const service = new ServiceCar();
      const result = await service.carCreate(mockCarWithoutStatus);
      expect(result).to.be.deep.equal(mockOutputCar[0]);
    });
  });
  describe('Tests with PUT in the route /cars', function () {
    it('Should change an car with sucess', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(mockOutputCar[0]);
      const service = new ServiceCar();
      const result = await service.carUpdate('1', mockOutputCar[1]);
      expect(result).to.be.deep.equal(mockOutputCar[1]);
    });
    it('Should fail trying to change a car that not exist', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
      try {
        const service = new ServiceCar();

        await service.carUpdate('2', mockOutputCar[1]);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});