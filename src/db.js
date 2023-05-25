//se configura la conexion a la base de datos 
import { connect } from 'mongoose';
import { MONGODB_URI } from './config';

export const connectDB = async () => {
  //try catch para la conexion
  try {
    await connect(MONGODB_URI);
    console.log('conexion exitosa');
  } catch (error) {
    console.log(error);  
  }

}