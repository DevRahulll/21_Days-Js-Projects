let gameContainer = document.getElementById("game")
let restartBtn = document.getElementById("restart")
let moveCounterDisplay = document.getElementById("move-counter");

let lockBoard = false;
let firstCard, secondCard;
let matchedPairs = 0;
let totalPairs = 8;
let moves = 0;

const winMessageHTML = document.createElement("div");
winMessageHTML.classList.add("win-message");
winMessageHTML.innerHTML = "🎉🎊Congratulations! You Won! 🎊🎉"
document.body.appendChild(winMessageHTML);

const icons = ["🍎", "🍎", "🐶", "🐶", "🚗", "🚗", "⭐", "⭐", "🍕", "🍕", "🎧", "🎧", "⚽", "⚽", "🎁", "🎁"];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5)
}

function updatesMoveCounter() {
    moveCounterDisplay.textContent = `Moves: ${moves}`
}

function createBoard() {
    gameContainer.innerHTML = "";
    lockBoard = false;
    firstCard = secondCard = null;

    moves = 0;
    updatesMoveCounter();

    winMessageHTML.classList.remove("show");

    const shuffledIcons = shuffle([...icons]);

    shuffledIcons.forEach(icon => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <div class="card-inner">
        <div class="card-front">${icon}</div>
        <div class="card-back">❓</div>
        </div>
        `;

        card.dataset.icon = icon;
        card.addEventListener("click", flipCard);

        gameContainer.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard || this === firstCard) return;
    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;

    moves++;
    updatesMoveCounter();

    checkMatch();


}

function checkMatch() {
    lockBoard = true;

    const match = firstCard.dataset.icon === secondCard.dataset.icon;

    if (match) {
        disableCard();
    } else {
        unflipCards();
    }
}

function disableCard() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    firstCard.classList.add("matched");
    secondCard.classList.add("matched");

    matchedPairs++;
    checkForWin();

    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");

        resetBoard();
    }, 800);
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function checkForWin() {
    if (matchedPairs === totalPairs) {
        winMessageHTML.classList.add("show")
        setTimeout(() => {
            createBoard();
        }, 3000);
    }
}

restartBtn.addEventListener("click", createBoard);

createBoard();