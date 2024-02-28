const WebSocket = require("ws");
const http = require("http");
const server = http.createServer();
const wss = new WebSocket.Server({ noServer: true });

wss.on("connection", (socket) => {
  // simulate speed updates
  let speed = 0;
  setInterval(() => {
    //   const speed = Math.floor(Math.random() * 100);
    speed += 5;
    speed %= 80;
    socket.send(JSON.stringify({ speed }));
  }, 100);
  // replace with data coming from canbus
});

server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (socket) => {
    wss.emit("connection", socket, request);
  });
});

server.listen(3001, () => {
  console.log("WebSocket server is running on port 3001");
});
