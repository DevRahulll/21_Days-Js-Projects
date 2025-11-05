let h = document.querySelector("#hour")
let m = document.querySelector("#minute")
let s = document.querySelector("#second")

setInterval(function setTime() {
    let time = new Date();
    h.textContent = time.getHours();
    m.textContent = time.getMinutes();
    s.textContent = time.getSeconds();
}, 1000)






