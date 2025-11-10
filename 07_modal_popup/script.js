let text = document.querySelector("textarea")
let btn = document.querySelector("button")
let close = document.getElementById("close")
let modal = document.getElementById("modal")
let content=document.getElementById("content")

btn.addEventListener("click", function () {

    if(text.value.trim()==="") return alert("Write something interesting...")

    modal.style.display = "flex";
    content.innerHTML="";
    let header=document.createElement("div")
    header.className="modal-header";
    
    let title=document.createElement("div");
    title.className="modal-title";
    title.textContent="Your message";
    header.appendChild(title);
    content.appendChild(header);

    let p=document.createElement("p")
    p.textContent=text.value;
    content.appendChild(p)

    text.value=""
})

close.addEventListener("click", function () {
    modal.style.display = "none";
})

window.addEventListener("click",function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
})