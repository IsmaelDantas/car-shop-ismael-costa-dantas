import { Schema } from 'mongoose';
import ICars from '../Interfaces/ICars';
import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM<ICars> {
  constructor() {
    const schema = new Schema<ICars>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }
}