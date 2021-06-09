import appendMessage from "./appendMessage.js";

export function sendUserData(socket,data){
    socket.emit("data",{name:data})
}


export function chatLogic(socket){
    //all chat logic goes here;
    socket.on("new",data=>{
        appendMessage(data,body,socket)
    })
}