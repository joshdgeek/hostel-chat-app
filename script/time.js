let openGroup = false
let time = new Date().getHours()

if(time==12){
    openGroup = true
}else if(time==2){
    openGroup=false
}

function closedSign(body){
    body = document.querySelector("#container")
    let newElem = document.createElement("div")
    let text = document.createElement("h1")
    text.className = "closed-text"
    text.innerText = "CLOSED till 10pm"
    newElem.className = "closed"
    newElem.append(text)
    body.append(newElem)
}

export {openGroup, closedSign}
