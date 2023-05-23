import express from 'express';// se crea el servidor de express
import path from 'path';//se importa para poder unir las direciones de los archivos

const app = express();

app.use(express.static(path.join(__dirname, 'public')));//desde aca se sirve toda la carpeta public

export default app;