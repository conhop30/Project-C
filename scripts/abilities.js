
import { fetchChampionData } from "./championUtils.js";

function displayAbilityHeader() {
    let header = document.getElementById("header");
    let headerType = document.createElement("h1");
    headerType.textContent = "Abilities";

    header.appendChild(headerType);
}

function displayAbilityNavs(championName) {
    console.log(`displayAbilityNavs called with: ${championName}`);
    
    const champion = cachedChampionData[championName]; // Get the cached data

    console.log("Cached Data:", cachedChampionData); // Log entire cached data
    console.log("Fetched Champion Data:", champion); // Log the specific champion data

    if (!champion) {
        console.error(`Error: Champion data for "${championName}" is undefined.`);
        return;
    }

    if (!champion.abilities) {
        console.error(`Error: Champion "${championName}" has no abilities property.`);
        return;
    }
    const abilitiesContainer = document.getElementById("abilities-buttons-container");

    if (!abilitiesContainer) {
        console.error('Error: Element with id "abilities-buttons-container" not found.');
        return;
    }

    for (const key in champion.abilities) {
        let ability = champion.abilities[key];

        if (!ability) {
            console.error(`Error: Ability key "${key}" is undefined.`);
            continue;
        }

        console.log(`Adding ability: ${ability.name} (Key: ${key})`); // Debug log

        let abilityWrapper = document.createElement("button");
        abilityWrapper.classList.add("ability-wrapper");

        let icon = createAbilityElement("icon", "img", ability.icon, ability.name);
        let nameBanner = createAbilityElement("name-banner", "h5", null, ability.name);

        abilityWrapper.appendChild(icon);
        abilityWrapper.appendChild(nameBanner);
        abilitiesContainer.appendChild(abilityWrapper);
    }
}




function setAbilitySpotlight(championName, ability) {
    console.log("setAbilitySpotlight is running for:", championName, "Ability:", ability.name);

    try {
        let spotlightContainer = document.getElementById("ability-spotlight");
        if (!spotlightContainer) {
            console.error("Error: spotlight container not found.");
            return;
        }

        // Clear any existing spotlight content
        spotlightContainer.innerHTML = "";

        // Create elements
        let spotlightWrapper = document.createElement("section");
        spotlightWrapper.classList.add("spotlight-wrapper");

        // Create video element
        let videoElement = document.createElement("video");
        videoElement.id = "ability-video";
        videoElement.autoplay = true;
        videoElement.loop = true;
        videoElement.muted = true;

        let sourceElement = document.createElement("source");
        sourceElement.src = ability.video;
        sourceElement.type = "video/mp4";

        videoElement.appendChild(sourceElement);

        let spotlightName = createAbilityElement("spotlight-name", "h3", null, ability.name);
        let boundKey = createAbilityElement("bound-key", "h4", null, ability.boundKey);
        let description = createAbilityElement("description", "p", null, ability.description);

        // Append new elements to spotlight
        spotlightContainer.appendChild(videoElement);
        spotlightWrapper.appendChild(spotlightName);
        spotlightWrapper.appendChild(boundKey);
        spotlightWrapper.appendChild(description);
        spotlightContainer.appendChild(spotlightWrapper);
    } catch (error) {
        console.error(error.message);
    }
}

function createAbilityVideo(videoSrc) {
    const previewContainer = document.getElementById("ability-spotlight");

    if (!previewContainer) {
        console.error("Error: preview-window not found in the DOM.");
        return;
    }

    let videoElement = document.createElement("video");
    videoElement.id = "ability-video";
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = true;

    let sourceElement = document.createElement("source");
    sourceElement.src = videoSrc;
    sourceElement.type = "video/mp4";

    videoElement.appendChild(sourceElement);
    previewContainer.appendChild(videoElement);
}

async function initializeAbilitiesSection(championName) {
    console.log(`Initializing abilities for: ${championName}`);

    let champion = await fetchChampionData(championName);

    console.log("Fetched Champion Data:", champion); // Should log data

    if (!champion || !champion.abilities) {
        console.error(`Abilities not found for ${championName}`);
        return;
    }

    displayAbilityNavs(championName);
}


// function initializeAbilitiesSection(championName) {

//     displayAbilityHeader();
//     displayAbilityNavs(championName);

//     let championData = fetchChampionData(championName);
//     if (championData.abilities?.ability1) {
//         setAbilitySpotlight(championName, championData.abilities.ability1);
//     } else {
//         console.error(`Error: Default ability1 not found for ${championName}`);
//     }
// }

export { initializeAbilitiesSection, displayAbilityNavs };