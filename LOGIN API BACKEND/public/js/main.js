

const chatForm = document.getElementById("chat-form");
const socket = io();
const chatMessage = document.querySelector(".chat-messages");
const usersList = document.getElementById("users");
const {username , room } = Qs.parse(location.search ,{
    ignoreQueryPrefix : true
});

socket.emit("joinRoom",{username,room});


socket.on("message",(msg)=>{
    console.log(msg);
    outputMessage(msg);
    chatMessage.scrollTop = chatMessage.scrollHeight;
})

socket.on("roomUsers",({room,users})=>{
    console.log(room);
    console.log(users);
    console.log("Hello");
    outputRoom(room);
    outputUsers(users);
})


chatForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const msg = e.target.elements.msg.value;
    //Emit Message To Server
    socket.emit("chatmessage",msg);
    e.target.elements.msg.value = "";
    e.target.elements.msg.focus();
})

function outputMessage(message){
    const div = document.createElement("div");
    div.classList.add("message");
    div.innerHTML = `<p class="meta">${message.username + " "} <span> ${message.time}</span></p>
    <p class="text">
    ${message.message}
    </p>`;
    const chatMessage = document.querySelector(".chat-messages");
    
    chatMessage.appendChild(div);
}


function outputRoom(room){
    const roomName = document.getElementById("room-name");
    roomName.innerHTML = room;
}


function outputUsers(users){
    console.log(users);
    usersList.innerHTML = `
        ${users.map(user1 => `<li>${user1.username}<\li>`).join(" ")}   `
}