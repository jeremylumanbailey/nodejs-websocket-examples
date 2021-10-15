const net = require('net');

// Create a server object
const server = net.createServer((socket) => {
  let count = 1;
  function sendPing(socket) {
    count++;
    socket.write(`${count} ping\n`);
  }
  socket.on('data', (data) => {
    console.log(data.toString());
  });

  socket.write('SERVER: Hello! This is server speaking.\n');
  var intervalID = setInterval(sendPing, 0, socket);
  // socket.write('ping\n');

  // socket.end('SERVER: Closing connection now.\n');
}).on('error', (err) => {
  console.error(err);
});

// Open server on port 9898
server.listen(9898, () => {
  console.log('opened server on', server.address().port);
});
