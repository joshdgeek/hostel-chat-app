//name the cache
const cacheName = "static"
const assets = [
    "/",
    "/index.html"
]


self.addEventListener("install",evt=>{
    console.log("service worker installed")
    evt.waitUntil(
        cache.open(cacheName).then(cache=>{
            console.log("caching the assets")
            cache.addAll(assets)
        })
    )
})


self.addEventListener("activate",evt=>{
    console.log("serviceworker activated")
})