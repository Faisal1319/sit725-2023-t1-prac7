const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const sampleRoutes = require('routes');
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname));
app.use('/sample', sampleRoutes);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('number', (msg) => {
        console.log('message: ' + msg);
        io.emit('number', msg);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
