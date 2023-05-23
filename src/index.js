import app from './app.js';//aplicaion de express
import {Server as websocketserver} from 'socket.io';
import http from 'http';

const server = http.createServer(app);//se envia la app de expres atravez de creatserver y retorna un servidor
const httpServer = server.listen(3000);//se hace escuchar al servidor un puerto
const io = new websocketserver(httpServer);//se le pasa a websocket el servidor para que lo reconosca 

console.log('Server is running on port 3000');

