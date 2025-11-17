const data = [
    {
        image: "https://images.pexels.com/photos/34051342/pexels-photo-34051342.jpeg",
        title: "Nature Escape",
        bio: "A peaceful green trail surrounded by tall trees, offering a refreshing escape from city life."
    },
    {
        image: "https://images.pexels.com/photos/26569428/pexels-photo-26569428.jpeg",
        title: "Couple",
        bio: "A lovely couple enjoying a quiet moment together, capturing the beauty of companionship."
    },
    {
        image: "https://images.pexels.com/photos/34403453/pexels-photo-34403453.jpeg",
        title: "Maple Tree",
        bio: "A vibrant maple tree in full autumn colors, glowing under the soft evening sunlight."
    },
    {
        image: "https://images.pexels.com/photos/28637776/pexels-photo-28637776.jpeg",
        title: "Skating",
        bio: "A graceful skating moment frozen in time, blending motion, balance, and elegance."
    },
    {
        image: "https://images.pexels.com/photos/34485968/pexels-photo-34485968.jpeg",
        title: "Sunset",
        bio: "A warm orange sunset painting the sky, bringing a peaceful end to the day."
    },
    {
        image: "https://images.pexels.com/photos/262100/pexels-photo-262100.jpeg",
        title: "Traffic",
        bio: "City traffic at night glowing with headlights, capturing the rhythm of urban life."
    }
];

let cardsBox = document.querySelector("#cards")
let searchInput = document.querySelector("#searchInput");

function displayCard(arr) {
    cardsBox.innerHTML = "";

    arr.forEach(element => {
        let card = document.createElement("div");
        card.classList.add("card")

        card.innerHTML = `<div class="card-img" style="background-image: url(${element.image})"></div>
        <div class="card-content">
        <h3 class="card-title">${element.title}</h3>
        <p class="card-bio">${element.bio} </p>
        `;

        cardsBox.appendChild(card);
    });
}

displayCard(data);

searchInput.addEventListener("input", function () {
    let text = searchInput.value.toLowerCase();

    let filteredData = data.filter((item) => item.title.toLowerCase().includes(text));
    displayCard(filteredData);
})