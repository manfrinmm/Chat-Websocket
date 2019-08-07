"use strict";

//Escuta o que vem do cliente
class ChatController {
  // constructor === open (lá do cliente)
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;
  }

  onMessage(data) {
    // console.log(data);
    //todos clientes conectados recebam essa informação
    this.socket.broadcastToAll("message", data);
  }
}

module.exports = ChatController;
