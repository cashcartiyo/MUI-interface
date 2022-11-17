const express = require('express')
const app = express()

const rooms = ['general', 'tech', 'finance', 'crypto']
const cors = require('cors')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//server build up starts here
const server= require('http').createServer(app)
const PORT = 4202
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost3000',
        //web socket methods communicate between server frontend
        methods: ['GET', 'POST']
    }
})


server.listen(PORT,() =>{
    console.log('listening to port', PORT)
})