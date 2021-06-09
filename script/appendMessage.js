export default function appendMessage(message,body,socket){
    const newDiv = document.createElement("div")
    newDiv.className = "message" 
    newDiv.innerText = message;
    body.append(newDiv)
    socket.emit("incoming-message",message)
    console.log(message)
}

// the module is sent to the chatLogic.js