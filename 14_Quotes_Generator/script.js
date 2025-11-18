let btn = document.querySelector("button")
let author = document.querySelector(".author")
let quote = document.querySelector(".quote")

async function getQuotes() {

    const url = 'https://api.freeapi.app/api/v1/public/quotes/quote/random';
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        quote.textContent = data.data.content;
        author.textContent = `~${data.data.author}`;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
getQuotes();

btn.addEventListener("click", function () {
    getQuotes();
})