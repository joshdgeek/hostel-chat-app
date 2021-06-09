let socket = io("http://localhost:8080/",{transports:["websocket","polling","flashsocket"]})
import {sendUserData} from "./socket-client.js";
let select = document.querySelector("select")
let container = document.querySelector("#container")
let [boys,girls ,pack] = document.querySelectorAll(".child-rooms")
let input = document.querySelector("input")
import {openGroup, closedSign} from "./time.js"



//place time limit for group to be opened

if(openGroup){
    boys.addEventListener("click",()=>{
        if(input.value!="" && select.value == "Male" ){
            sendUserData(socket,input.value)
            sessionStorage.setItem("key","male")
            location.assign("/theboys.html")
        }
        else if(select.value != "Male"){
            return alert("your gender is not for this group")
        }
        else{
            return  alert("input both username and select a gender")
        } 
    })
    
    girls.addEventListener("click",()=>{
    
        if(input.value!="" && select.value == "Female"){
            sessionStorage.setItem("key","female")
            sendUserData(socket,input.value)
            location.assign("/thecheezy.html")
        }
    
        else if(select.value != "Female"){
            return alert("your gender is not for this group")
        }
    
        else{
            return alert("input both username and select a gender")
        } 
    })
    
    pack.addEventListener("click",()=>{
    
        if(input.value!="" && select.value == "Male" || "Female"){
            sessionStorage.setItem("key","mixed")
            sendUserData(socket,input.value)
            location.assign("/thePack.html")
        }
        else{
            return  alert("input both username and select a gender")
        } 
    })
}

else{
    //makes the site dormant till the opening time
    console.log("hmmm")
    closedSign(container)
}