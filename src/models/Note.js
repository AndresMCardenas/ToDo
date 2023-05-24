// se definen las propiedades que se vana guardar en el modelo y sus tipos de datos
import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    titel: {
      type: String,
      required: true,//se hace obligatorio el campo
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,// se guarda fecha de creacion y de ultima modificacion
  }
);

export default model('Note', schema)// se exporta todo el schema