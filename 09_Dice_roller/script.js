let button = document.querySelector("button")
let content = document.querySelector("#content")
let img = document.querySelector("img")

let p = document.createElement("p")

function getRandomNumber() {
    img.classList.add("animate")

    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        img.classList.remove("animate")
        img.setAttribute("src", `./assets/${randomNumber}.png`)
        p.textContent = `Your Dice number is :  ${randomNumber}`
        content.appendChild(p);
    }, 500);
}

button.addEventListener("click", getRandomNumber)