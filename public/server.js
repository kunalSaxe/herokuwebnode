const io=require('socket.io')(2000)

io.on('connection',socket=>{
    socket.emit('chat-message','hello world')

})