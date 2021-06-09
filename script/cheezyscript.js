let socket = io("http://localhost:8080/girls",{transports:["websocket","polling","flashsocket"]})
//import appendMessage from "./appendMessage"
let body = document.querySelector("#boys-message");
let form = document.querySelector("form")
let input = document.querySelector("#message-input")
let container = document.querySelector("#container")
import {openGroup, closedSign} from "./time.js" //import timelapse function

//write code to restrict rewriting  of cookies until browser is closed
if(sessionStorage.getItem("key")!="female"){
    location.assign("/index.html")
}

if(!openGroup){
    closedSign(container)
}


userConnected(`YOU Connected`)

socket.on("newUser-alert", data=>{
    userConnected(data)
})

socket.on("broadcast-message",data=>{
    sendMessage(data)
})

socket.on("disconnected",data=>{
    userConnected(data)
})

form.addEventListener("submit", e=>{
    e.preventDefault();
    let message =  input.value
    appendMessage(message)
    socket.emit("incoming-message",message)
    input.value = ""
})

function appendMessage(message){
    const newDiv = document.createElement("div")
    const flex = document.createElement("div")
    flex.className = "message-cont"
    newDiv.className = "message" 
    newDiv.innerText =message;
    flex.append(newDiv)
    body.append(flex)
}

function sendMessage(message){
    const newDiv = document.createElement("div")
    newDiv.className = "senders-message" 
    newDiv.innerText = message;
    body.append(newDiv)
}

function userConnected(message){
    const newDiv = document.createElement("div")
    let br = document.createElement("br")
    br.className="break"
    newDiv.className = "user-connected" 
    newDiv.innerText = message;
    newDiv.append(br)
    body.append(newDiv)
}