const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('chat message: ' + msg)
    });
   
});

http.listen(3001, () => {});