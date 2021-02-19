import mongoose, { Schema, Document } from "mongoose";

export interface ICity extends Document {
  name: string;
  uf: string;
  area: number;
  population: number;
  active: boolean;
  CreatedAt: Date;
  updatedAt: Date;
}

const CitySchema: Schema = new Schema({
  name: { type: String, required: true },
  uf: { type: String, required: true },
  area: { type: Number, required: true },
  population: { type: Number, required: true },
  active: { type: Boolean, required: true, default: true },
  CreatedAt: { type: Date, required: true, default: new Date() },
  updatedAt: { type: Date, required: true, default: new Date() },
});

export default mongoose.model<ICity>("City", CitySchema);
