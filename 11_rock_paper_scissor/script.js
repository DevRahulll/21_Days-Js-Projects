function play(userChoice) {
    document.getElementById("user-choice").innerText = "You Choose: " + userChoice;

    let options = ["stone", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random() * 3)];

    document.getElementById("computer-choice").innerText = "Computer Choice: " + computerChoice;

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Tie!";
    } else if (
        (userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "YOU WIN! 🎉"
    } else {
        result = "You Lose! 🥲";
    }

    document.getElementById("result").innerText = result;
}