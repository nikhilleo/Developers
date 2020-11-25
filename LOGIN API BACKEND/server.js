
const express = require('express');
const path = require("path");
const http = require("http");
const socket = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socket(server); 

const format = require("./utils/message");
const {userJoin,getCurrentUser , userLeave , getRoomUsers} = require("./utils/user");

app.use(express.static(path.join(__dirname , "public")));

io.on("connection", (socket)=>{
    // console.log(socket);

    socket.on("joinRoom",({username,room})=>{
        // console.log("Client Connected");
        const user = userJoin(socket.id,username,room);

        socket.join(user.room);

        socket.emit("message",format("Bot","Welcome To SlackChat"));
        
        socket.broadcast.to(user.room).emit("message",format("Bot",`${user.username} Has Connected`));
        

        io.to(user.room).emit("roomUsers",{
            room:user.room,
            users:getRoomUsers(user.room)
        })
        
    })
    socket.on("chatmessage",(msg)=>{
        const user = getCurrentUser(socket.id)
        console.log(msg);
        io.to(user.room).emit("message", format(user.username,msg));
    })
    socket.on("disconnect",()=>{
        const user = userLeave(socket.id);
        if(user)
        {
            io.to(user.room).emit("message",format("Bot",`${user.username} Has Left The Chat`));
            io.to(user.room).emit("roomUsers",{
                room:user.room,
                users:getRoomUsers(user.room)
            })
        }
    });
})


const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});