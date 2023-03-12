export default(io) => {
    //(on) = escucha la conneccion
    io.on('connection', (socket) => {
        console.log(socket.handshake);
    })
}