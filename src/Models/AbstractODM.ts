import { model, Model, models, Schema } from 'mongoose';

abstract class VehODM<T> {
  protected _model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this._model = models[this.modelName] || model(this.modelName, this.schema);
  }
  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }
  public async allGet(): Promise<T[]> {
    const cars = await this._model.find();
    return cars;
  }
  public async idGetBy(id: string): Promise<T | null> {
    const car = await this._model.findById(id);
    return car;
  }
}
export default VehODM;