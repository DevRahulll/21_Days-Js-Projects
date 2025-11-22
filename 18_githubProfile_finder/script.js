const uri = 'https://api.github.com/users'
let inputBox = document.querySelector("#inputBox")
let SearchBtn = document.querySelector("#btn")
let imageBox = document.querySelector("#imageBox")
let fullName = document.querySelector("#fullname")
let userName = document.querySelector("#username")
let repos = document.querySelector("#repos");
let bio = document.querySelector("#bio");
let GithubBtn = document.querySelector('#GithubBtn');


async function displayProfile() {
    const userProfiletoFetch = inputBox.value.trim() === "" ? "devrahulll" : inputBox.value;

    try {
        let response = await fetch(`${uri}/${userProfiletoFetch}`)
        let data = await response.json();
        console.log("Data: ", data);

        if (data.message === 'Not Found') {
            alert("Github User Doesn't existed");
            inputBox.value = "";
            return;
        }

        imageBox.src = data.avatar_url;
        fullName.textContent = data.name;
        userName.textContent = data.login;
        repos.textContent = data.public_repos;
        bio.textContent = data.bio;
        GithubBtn.href = data.html_url;

        inputBox.value = "";
    } catch (error) {
        console.error(error)
        // alert("An error occurred while fetching the profile. Please check your network connection.");
        inputBox.value = "";
    }
    inputBox.value = "";
}

SearchBtn.addEventListener('click', () => {
    displayProfile();
})

inputBox.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        displayProfile();
    }
})

displayProfile();
