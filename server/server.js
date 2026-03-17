import WebSocket from "ws";

const server = new WebSocket.Server({ port: 3000 });
const upstream = new WebSocket("wss://api.p2pquake.net/v2/ws");

upstream.on("message", (msg) => {
  server.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(msg.toString());
    }
  });
});
