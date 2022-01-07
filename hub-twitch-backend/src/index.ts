import fs, { watchFile } from 'fs'
import { config } from 'dotenv'
import { io, serverHttp } from './http'
import { socket } from './websocket'

config()

const _port = process.env.PORT || 8080
const dir_base = process.env.DIR_BASE

const getLastFollower = () => fs.readFileSync(`${dir_base}most_recent_follower.txt`, 'utf-8')
const getLastSubscriber = () => fs.readFileSync(`${dir_base}most_recent_subscriber.txt`, 'utf-8')

watchFile(`${dir_base}most_recent_follower.txt`, async (curr, prev) => {
  if (curr != prev) {
    const last_follower = getLastFollower()
    const last_subscriber = getLastSubscriber()
    io.emit('last_follower', last_follower)
    io.emit('last_subscriber', last_subscriber)
  }
})

serverHttp.listen(_port, () => {
  console.log(`Server is running on port ${_port}`)
  socket({ io })
})
