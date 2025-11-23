let balance = document.getElementById("balance")
let moneyPlus = document.getElementById("moneyPlus")
let moneyMinus = document.getElementById("moneyMinus")
let list = document.getElementById("list")
let form = document.getElementById("form")
let text = document.getElementById("text")
let amount = document.getElementById("amount")

let transactions = [];

function addTransactions(e) {
    e.preventDefault();

    const transaction = {
        id: generateId(),
        text: text.value,
        amount: +amount.value
    }

    addTransactionDOM(transaction);
    transactions.push(transaction);

    updateTransaction();

    text.value = "";
    amount.value = "";
    init();
}

function generateId() {
    return Math.floor(Math.random() * 1000000);
}

function addTransactionDOM(transaction) {
    let sign = transaction.amount < 0 ? "-" : "+";
    let item = document.createElement("li")

    item.classList.add(transaction.amount < 0 ? "minus" : "plus")

    item.innerHTML = `${transaction.text} <span>${sign} ₹${Math.abs(transaction.amount)}</span>
     <button class="delete" onclick="removeTransaction(${transaction.id})">x</button>
    `;

    list.appendChild(item);
}

function removeTransaction(id) {
    transactions = transactions.filter((transaction) => transaction.id !== id);
    init();
}

function init() {
    list.innerHTML = "";
    if (transactions.length == 0) {
        let item = document.createElement("li");
        item.innerHTML = "<li>No Transaction</li>";
        list.appendChild(item);
    } else {
        transactions.forEach(addTransactionDOM);
    }

    updateTransaction();

}

function updateTransaction() {
    let amount = transactions.map((transaction) => transaction.amount);
    let total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

    let income = amount.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    let expense = (amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    balance.innerText = `₹${total}`
    moneyPlus.innerText = `₹${income}`
    moneyMinus.innerText = `₹${expense}`

}

init();
form.addEventListener("submit", addTransactions);
