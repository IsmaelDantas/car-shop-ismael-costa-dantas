import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Moto from '../../../src/Services/ServiceMoto';
import { mockInputMoto, mockOutputMoto, motoWithoutStatusMock } from '../mock/motoMocks';

describe('Tests in ServiceMoto', function () {
  describe('Tests with GET in the route /motorcycles', function () {
    it('Should return all motorcycles with GET in the route /motorcycles', async function () {
      sinon.stub(Model, 'find').resolves(mockOutputMoto);
      const service = new Moto();
      const result = await service.allGet();
      expect(result.message).to.be.deep.equal(mockOutputMoto);
    });
    it('Should failed to do a GET with a route with invalid ID', async function () {
      sinon.stub(Model, 'findById').resolves(mockOutputMoto[0]);
      try {
        const service = new Moto();
        await service.idGetBy('999');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
  });
  describe('Tests with POST in the route /cars', function () {
    it('Should create a new moto with sucess', async function () {
      sinon.stub(Model, 'create').resolves(mockOutputMoto[0]);
      const service = new Moto();
      const result = await service.motoCreate(mockInputMoto);
      expect(result).to.be.deep.equal(mockOutputMoto[0]);
    });
    it('Should create a new moto with sucess with the false status', async function () {
      sinon.stub(Model, 'create').resolves(mockOutputMoto[0]);
      const service = new Moto();
      const result = await service.motoCreate(motoWithoutStatusMock);
      expect(result).to.be.deep.equal(mockOutputMoto[0]);
    });
    describe('Tests with PUT in /motorcycles route', function () {
      it('Should change a moto with sucess', async function () {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(mockOutputMoto[0]);
        const service = new Moto();
        const result = await service.motoUpdate('1', mockOutputMoto[1]);
        expect(result).to.be.deep.equal(mockOutputMoto[1]);
      });
      it('Should fail trying to change a moto that does not exist', async function () {
        sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
        try {
          const service = new Moto();
          await service.motoUpdate('2', mockOutputMoto[1]);
        } catch (error) {
          expect((error as Error).message).to.be.equal('Motorcycle not found');
        }
      });
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});