const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const io = socketIO(server, {
    cors: {
        origin: "*"
    }
});

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '..repo_2/realtime-drawing-app/dist/realtime-drawing-app')));

io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle drawing events
    socket.on('draw', (data) => {
        socket.broadcast.emit('draw', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
