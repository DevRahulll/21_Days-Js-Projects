const dropdown = document.querySelector(".dropdown");
const info = document.querySelector(".info");

const countryName = document.querySelector(".country-name");
const countryFlag = document.querySelector(".country-flag");
const countryCapital = document.querySelector(".country-capital");
const countryCurrency = document.querySelector(".country-currency");
const countryPopulation = document.querySelector(".country-population");
const countryRegion = document.querySelector(".country-region");


const populateDropdown = async () => {
    try {
        const response = await fetch(
            "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,currencies"
        );

        const data = await response.json();

        // Sort alphabetically by Common Name
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));

        data.forEach(country => {
            const option = document.createElement("option");
            option.value = JSON.stringify(country);
            option.textContent = country.name.common;
            dropdown.appendChild(option);
        });

    } catch (error) {
        console.error("Error loading countries:", error);
    }
};

// 2️⃣ HANDLE COUNTRY SELECT EVENT
// ---------------------------------------------------
dropdown.addEventListener("change", (e) => {
    if (!e.target.value) {
        info.style.display = "none";
        return;
    }

    const country = JSON.parse(e.target.value);
    showCountryDetails(country);
});

const showCountryDetails = (country) => {

    // Country Name
    countryName.innerText = country.name.common;

    // Flag
    countryFlag.src = country.flags.png;

    // Capital (array in API)
    countryCapital.innerText = country.capital ? country.capital[0] : "Not available";

    // Region
    countryRegion.innerText = country.region || "Not available";

    // Population
    countryPopulation.innerText = country.population
        ? country.population.toLocaleString("en-IN")
        : "Not available";

    // Currency (object -> extract first key)
    if (country.currencies) {
        const currencyCode = Object.keys(country.currencies)[0];
        const currencyName = country.currencies[currencyCode].name;
        countryCurrency.innerText = `${currencyName} (${currencyCode})`;
    } else {
        countryCurrency.innerText = "Not available";
    }

    info.style.display = "block";
};

document.addEventListener("DOMContentLoaded", populateDropdown)
