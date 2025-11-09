let input = document.querySelector("input")
let addTodo = document.querySelector("#add-todo")
let todosContainer = document.querySelector("#list-display");

function addTodoList() {

    if (input.value === "") {
        alert("Please write something...")
        return;
    } else {
        let li = document.createElement("li")
        li.innerHTML = input.value;
        todosContainer.appendChild(li);

        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    input.value = "";
    saveTodo();
}

todosContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTodo();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTodo();
    }
})

addTodo.addEventListener("click", function () {
    addTodoList();
})

function saveTodo() {
    window.localStorage.setItem("todo", todosContainer.innerHTML)
}

function getTodo() {
    todosContainer.innerHTML = window.localStorage.getItem("todo")
}

getTodo();