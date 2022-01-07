import cors from "cors";
import express from "express";
import http from 'http'
import { Server } from 'socket.io'

const app = express()
app.use(cors())

const serverHttp = http.createServer(app)

const io = new Server(serverHttp, {
  cors: {
    origin: 'http://localhost:2003', // URL DO FRONT-END !!! É MUTÁVEL !! 
    credentials: true,
  }
}
)

export {
  serverHttp,
  io
}