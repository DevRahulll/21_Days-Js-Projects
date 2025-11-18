let displayBox = document.querySelector(".passBox")
let inputSlider = document.querySelector("#inputSlider")
let sliderValue = document.querySelector("#sliderValue")
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let btn = document.querySelector(".btn")
let copyIcon = document.querySelector("#copyIcon")

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

function generatePassword() {
    let generatedPassword="";
    let allChars="";

    allChars+=lowercase.checked?lowerChars:"";
    allChars+=uppercase.checked?upperChars:"";
    allChars+=numbers.checked?allNumbers:"";
    allChars+=symbols.checked?allSymbols:"";

    if(allChars==""||allChars.length==0){
        return generatedPassword;
    }

    let i=1;
    while(i<=inputSlider.value){
        generatedPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length))
        i++;
    }
    return generatedPassword;
}

btn.addEventListener("click", () => {
    displayBox.value = generatePassword();
})

copyIcon.addEventListener('click',()=>{
    if(displayBox.value!=''||displayBox.value.length>=1){
        navigator.clipboard.writeText(displayBox.value);
        copyIcon.innerText="check";
        copyIcon.title="Password copied";

        setTimeout(() => {
            copyIcon.innerHTML="content_copy";
            copyIcon.title="";
        }, 3000);
    }
})