import { Server as WebSocketServer } from "socket.io";
import http from "http";
import Sockets from "./sockets";
import app from "./app";
import { connectDB } from "./db";
import { PORT } from "./config";

//conectar a la DB
connectDB();
//retorna un servidor
const server = http.createServer(app);
// que el sevidor escuche en el puerto 3000
const httpServer = server.listen(PORT);

console.log("Server on http://localhost:", PORT);
// servidor con websocket.io
const io = new WebSocketServer(httpServer);

Sockets(io);

/* hp - cantera */
/* QVEUc0RGohqc9evs QVEUc0RGohqc9evs */