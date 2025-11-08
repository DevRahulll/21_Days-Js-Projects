let previous = document.getElementById("previous")
let button = document.querySelector("button")
let display = document.querySelector("input");
let result = document.querySelector("small")

let attempt = 0;
let maxAttempts = 10;
let random = Math.floor(Math.random() * 100) + 1;
let previousGuesses = [];

function resetGame() {
    attempt = 0;
    previousGuesses = [];
    previous.textContent = "None";
    display.value = "";
}

button.addEventListener("click", function () {
    let userGuess = Number(display.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        result.style.display = "initial";
        result.textContent = "Please enter a number between 1 and 100!"
        result.style.color = "orange";
        display.value = "";
        return;
    }

    if (attempt < maxAttempts) {
        attempt++;
        previousGuesses.push(userGuess);

        previous.textContent = previousGuesses.join(", ");

        if (userGuess === random) {
            result.style.display = "initial";
            result.textContent = `🎉 Correct! You guessed it in ${attempt} attempt(s)!`
            result.style.color = "green";
            alert("🎯 You guessed correctly!")
            resetGame();
        } else if (attempt === maxAttempts) {
            result.style.display = "initial";
            result.textContent = `❌ Game Over! The number was ${random}`;
            result.style.color = "red";
            alert("You have used all your attempts!");
            resetGame();
        } else {
            result.style.display = "initial";
            result.textContent = userGuess > random ? "Too high! Try a smaller number." : "Too low! Try a bigger number.";
            result.style.color = "red";
        }

        display.value = "";
    }
})









