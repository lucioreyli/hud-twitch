import { Server, Socket } from "socket.io";

interface SocketProps {
  io: Server,
}

export function socket({ io }: SocketProps) {

  io.on('connect', (socket: Socket) => {
    console.log(`user ${socket.id} connected`)
    // socket.on('message', (message: string) => { io.emit('broadcastMessages', { message, id: socket.id, dateTime: new Date() }) });

  })

}