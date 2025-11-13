let leftArrow = document.querySelector("#left-arrow")
let rightArrow = document.querySelector("#right-arrow")
let image = document.querySelector("#hero-img")

let Images = ["./assets/thor.jpg",
    "./assets/spiderman.jpg",
    "./assets/ironman.jpg"];

let track = 0;


leftArrow.addEventListener("click", function () {
    track--;
    if (track < 0) {
        track = Images.length - 1;
    }
    image.setAttribute("src", Images[track])
    console.log("track : ", track);
})
rightArrow.addEventListener("click", function () {
    track++;
    if (track > Images.length - 1) {
        track = 0;
    }
    image.setAttribute("src", Images[track])
    console.log("track : ", track);
})