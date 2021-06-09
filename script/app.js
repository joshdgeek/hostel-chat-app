if("serviceWorker" in navigator){
    navigator.serviceWorker.register(".././app.js")
    .then(data=>{console.log("service-worker activated", data)})
    .catch(err=>console.log(err))
}