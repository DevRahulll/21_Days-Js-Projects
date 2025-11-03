let content = document.getElementById("content")
let increment = document.getElementById("increment")
let reset = document.getElementById("reset")
let decrement = document.getElementById("decrement")

let count = 0;
console.log(count);

function Addition() {
    count = count + 1;
    content.textContent = count;
    console.log(count);
}
function Subtraction() {
    count--;
    content.textContent = count;
    console.log(count);
}
function Reset() {
    count = 0;
    content.textContent = count;
    console.log(count);
}

reset.addEventListener("click", Reset);
decrement.addEventListener("click", Subtraction)
increment.addEventListener("click", Addition)
