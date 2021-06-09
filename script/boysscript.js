let socket = io("http://localhost:8080/boys",{transports:["websocket","polling","flashsocket"]})
//import appendMessage from "./appendMessage"
let body = document.querySelector("#boys-message");
let form = document.querySelector("form")
let input = document.querySelector("#message-input")
let container = document.querySelector("#container")
let feed = document.querySelector("#feedback")
import {openGroup, closedSign} from "./time.js"
 //import timelapse function


//write code to restrict rewriting  of cookies until browser is closed
if(sessionStorage.getItem("key")!="male"){
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
    feedback.innerText = " "
})



socket.on("disconnected",data=>{
    userConnected(data)
})


//user typing
input.addEventListener("keypress", ()=>{
    if(input.value !== ""){
        socket.emit("typing", "typing")
    }
})

socket.on("typing-feed", data=>{
    console.log(data)
    if(data != ""){
       return  feedback.innerText = data
    }
    else if(data == ""){
       return feedback.innerText = ""
    }
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
    newDiv.innerHTML = `
                        <h4 align="center"> ${message.name}</h4>
                        <div align="center">
                        ${message.message}
                        </div>`;
    body.append(newDiv)
}

function userConnected(message){
    feed.innerText = message
}