import app from './app';//aplicaion de express
import {Server as WebsocketServer} from 'socket.io';
import http from 'http';
import sockets from './sockets';// se importa socket io para realizar la escucha activa desde servidor y cliente

import { connectDB } from './db';// se importa la coneccion a la BD

//se llama la conexion a la base de datos
connectDB();

const server = http.createServer(app);//se envia la app de expres atravez de creatserver y retorna un servidor
const httpServer = server.listen(3000);//se hace escuchar al servidor un puerto
console.log('Server is running on port 3000');

const io = new WebsocketServer(httpServer);//se le pasa a websocket el servidor para que lo reconosca 
sockets(io);


