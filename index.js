const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    console.log(`Received message: ${data}`);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log('sa as');
});
