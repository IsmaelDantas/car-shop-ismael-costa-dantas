import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorCycle from '../../../src/Services/ServiceMoto';
import { mockInputMoto, mockOutputMoto, motoWithoutStatusMock } from '../mock/motoMocks';

describe('Tests in ServiceMoto', function () {
  // describe('Testes com GET na rota /motorcycles', function () {
  //   it('Tem que retornar todos os carros ao fazer um GET na rota /motorcycles', async function () {
  //     sinon.stub(Model, 'find').resolves(mockOutputMoto);

  //     const service = new MotorCycle();
  //     const result = await service.getAll();

  //     expect(result.message).to.be.deep.equal(mockOutputMoto);
  //   });
  //   it('Tem que falhar fazer um GET em uma rota com id inválido', async function () {
  //     sinon.stub(Model, 'findById').resolves(mockOutputMoto[0]);

  //     try {
  //       const service = new MotorCycle();
  //       await service.getById('999');
  //     } catch (error) {
  //       expect((error as Error).message).to.be.equal('Invalid mongo id');
  //     }
  //   });
  // });
  describe('Tests with POST in the route /cars', function () {
    it('Should create a new car with sucess', async function () {
      sinon.stub(Model, 'create').resolves(mockOutputMoto[0]);
      const service = new MotorCycle();
      const result = await service.motoCreate(mockInputMoto);
      expect(result).to.be.deep.equal(mockOutputMoto[0]);
    });
    it('Should create a new car with sucess with the false status', async function () {
      sinon.stub(Model, 'create').resolves(mockOutputMoto[0]);
      const service = new MotorCycle();
      const result = await service.motoCreate(motoWithoutStatusMock);
      expect(result).to.be.deep.equal(mockOutputMoto[0]);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});