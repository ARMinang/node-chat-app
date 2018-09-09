const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const PORT = process.env.PORT || 3000

const app = express()
var server = http.createServer(app)
var io = socketIO(server)

io.on('connection', (socket) => {
    console.log('new user connected')

    socket.on('disconnect', () => {
        console.log('user was disconnected')
    })
})

const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))

server.listen(PORT, () => {
    console.log(`Starting up server at port ${PORT}`)
})