let button = document.querySelector('button')
let content = document.querySelector('p')

console.dir(content);

function getRandomHexColor() {
    let color = '#';
    let hexDigits = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * hexDigits.length);
        color += hexDigits[random];
    }
    document.body.style.backgroundColor = color;
    content.textContent = color;
    console.log("color : ", color)
}

button.addEventListener("click", getRandomHexColor)