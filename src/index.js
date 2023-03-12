import app from './app'
import {Server as WebsocketServer} from 'socket.io'
import http from 'http';
import sockets from './sockets';

//conectar a la DB
import { connectDB } from './db';
connectDB();

//retorna un servidor
const server = http.createServer(app);
// que el sevidor escuche en el puerto 3000
const httpServer = server.listen(3000)
console.log('server in runing on port 3000');
// servidor con websocket.io
const io = new WebsocketServer(httpServer)
sockets(io);