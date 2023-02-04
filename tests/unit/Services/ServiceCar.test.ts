import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ServiceCar from '../../../src/Services/ServiceCar';
import { mockInputCar, mockOutputCar } from '../mock/carMock';

describe('ServiceCar tests', function () {
  describe('/cars rout test with GET', function () {
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
  describe('/cars routs tests with POST', function () {
    it('Should create a new car with sucess', async function () {
      sinon.stub(Model, 'create').resolves(mockOutputCar[0]);
      const service = new ServiceCar();
      const result = await service.carCreate(mockInputCar);
      expect(result).to.be.deep.equal(mockOutputCar[0]);
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});