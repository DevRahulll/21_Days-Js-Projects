let hour = document.querySelector("#hours")
let minutes = document.querySelector("#minutes")
let second = document.querySelector("#seconds")
let startBtn = document.querySelector("#btn-start")
let stopBtn = document.querySelector("#btn-stop")
let resetBtn = document.querySelector("#btn-reset")

let countdownTimer = null;



// Start Timer Logic
startBtn.addEventListener("click", function () {
    if (hour.value == 0 && minutes.value == 0 && second.value == 0) return;

    function startInterval() {
        startBtn.style.display = "none";
        stopBtn.style.display = "initial";

        countdownTimer = setInterval(function () {
            timer();
        }, 1000)
    }
    startInterval();
})


function timer() {
    // formatting the time
    if (second.value > 60) {
        minutes.value++;
        second.value = parseInt(second.value) - 59;
    }
    if (minutes.value > 60) {
        hour.value++;
        minutes.value = parseInt(minutes.value) - 60;
    }
    minutes.value = minutes.value > 60 ? 60 : minutes.value;

    // updating the time
    if (hour.value == 0 && minutes.value == 0 && second.value == 0) {
        hour.value = "";
        minutes.value = "";
        second.value = "";

        stopInterval();
        alert("TIMES UP!!!")
    }
    else if (second.value != 0) {
        second.value = `${second.value <= 10 ? "0" : ""}${second.value - 1}`;
    }
    else if (minutes.value != 0 && second.value == 0) {
        second.value = 59;
        minutes.value = `${minutes.value <= 10 ? "0" : ""}${minutes.value - 1}`
    } else if (hour.value != 0 && minutes.value == 0) {
        minutes.value = 60;
        hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`
        // console.log("hour" ,hour.value);
    }
    return;
}

// Stop Timer Logic
function stopInterval(state) {
    startBtn.innerHTML = state === "pause" ? "continue" : "Start";
    stopBtn.style.display = "none";
    startBtn.style.display = "initial";
    clearInterval(countdownTimer);
}


// Stop Timer Logic
stopBtn.addEventListener("click", function () {
    stopInterval("pause")
})

// Reset Timer Logic
resetBtn.addEventListener("click", function () {
    stopInterval();
    hour.value = "";
    minutes.value = "";
    second.value = "";
})
