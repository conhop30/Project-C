import { fetchChampionData } from "./championUtils.js";

async function displayChampion(championKey) {
    try {
        const champion = await fetchChampionData(championKey); // Fetch data properly
        if (!champion) return;

        let banner = document.getElementById("champion-banner");
        banner.innerHTML = ""; // Clear previous content to prevent duplicates

        // Create and append the hero image
        let heroImage = document.createElement("img");
        heroImage.id = "hero-image";
        heroImage.src = champion.championImage;
        heroImage.alt = `${champion.championName} Hero Image`;
        banner.appendChild(heroImage);

        // Create a wrapper for text content
        let textContainer = document.createElement("div");
        textContainer.id = "champion-text-container";

        // Title section
        let title = document.createElement("div");
        title.id = "title";
        let titleType = document.createElement("h3");
        titleType.textContent = champion.championTitle;
        let nameType = document.createElement("h1");
        nameType.textContent = champion.championName;
        title.appendChild(titleType);
        title.appendChild(nameType);

        // Bio section
        let bio = document.createElement("div");
        bio.id = "bio";
        let bioText = document.createElement("p");
        bioText.textContent = champion.bio;
        bio.appendChild(bioText);

        // Append both title and bio inside the text container
        textContainer.appendChild(title);
        textContainer.appendChild(bio);

        // Append text container to the banner
        banner.appendChild(textContainer);
    } catch (error) {
        console.error("Error fetching champion data:", error);
    }
}

function displayAbilityHeader() {
    let header = document.getElementById("header");
    let headerType = document.createElement("h1");
    headerType.textContent = "Abilities";
    header.appendChild(headerType);
}

export { displayChampion };  // Now it correctly exports the function
