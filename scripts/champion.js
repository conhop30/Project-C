
const ABILITY_AMOUNT = 5;

// All Champions
const Champions = {
    defaultChampion: {
        bio: "Default Champion",
        championTitle: "Default Title",
        championName: "Default Name",
        championImage: "default-champion-image.jpg"
    },
    aatrox: {
        bio: "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.",
        championTitle: "The Darkin Blade",
        championName: "Aatrox",
        championImage: "../assets/images/champions/aatrox/aatrox-hero-image.jpg",
        abilities: {
            ability1: {  // Passive
                name: "Deathbringer Stance",
                description: "Periodically, Aatrox's next basic attack deals bonus physical damage and heals him, based on the target's max health.",
                cost: 0,
                icon: "../assets/images/champions/aatrox/deathbringer-stance.webp",
                boundKey: "Passive",
                video: "../assets/videos/champions/aatrox/deathbringer-stance.mp4"
            },
            ability2: {  // Q
                name: "The Darkin Blade",
                description: "Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.",
                cost: 0,
                icon: "../assets/images/champions/aatrox/the-darkin-blade.webp",
                boundKey: "Q",
                video: "../assets/videos/champions/aatrox/the-darkin-blade.mp4"
            },
            ability3: {  // W
                name: "Infernal Chains",
                description: "Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.",
                cost: 0,
                icon: "../assets/images/champions/aatrox/infernal-chains.webp",
                boundKey: "W",
                video: "../assets/videos/champions/aatrox/infernal-chains.mp4"
            },
            ability4: {  // E
                name: "Umbral Dash",
                description: "Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.",
                cost: 0,
                icon: "../assets/images/champions/aatrox/umbral-dash.webp",
                boundKey: "E",
                video: "../assets/videos/champions/aatrox/umbral-dash.mp4"
            },
            ability5: {  // R
                name: "World Ender",
                description: "Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and Move Speed. If he gets a takedown, this effect is extended.",
                cost: 0,
                icon: "../assets/images/champions/aatrox/world-ender.webp",
                boundKey: "R",
                video: "../assets/videos/champions/aatrox/world-ender.mp4"
            }
        },
    },
    akali: {
        bio: "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.",
        championTitle: "The Rogue Assassin",
        championName: "Akali",
        championImage: "../assets/images/champions/akali/akali-hero-image.jpg",
        abilities: {
            ability1: {
                name: "Assassin's Mark",
                description: "Dealing spell damage to a champion creates a ring of energy around them. Exiting that ring empowers Akali's next Attack with bonus range and damage.",
                cost: 0,
                icon: "../assets/images/champions/akali/assassins-mark.webp",
                boundKey: "Passive",
                video: "../assets/videos/champions/akali/assassins-mark.mp4"
            },
            ability2: {
                name: "Five Point Strike",
                description: "Akali throws out five kunai, dealing damage based on her bonus Attack Damage and Ability Power and slowing.",
                cost: 0,
                icon: "../assets/images/champions/akali/five-point-strike.webp",
                boundKey: "Q",
                video: "../assets/videos/champions/akali/five-point-strike.mp4"
            },
            ability3: {
                name: "Twilight Shroud",
                description: "Akali drops a cover of smoke and briefly gains Move Speed. While inside the shroud, Akali becomes invisible and unable to be selected by enemy spells and attacks. Attacking or using abilities will briefly reveal her.",
                cost: 0,
                icon: "../assets/images/champions/akali/twilight-shroud.webp",
                boundKey: "W",
                video: "../assets/videos/champions/akali/twilight-shroud.mp4"
            },
            ability4: {
                name: "Shuriken Flip",
                description: "Flip backward and fire a shuriken forward, dealing magic damage. The first enemy or smoke cloud hit is marked. Re-cast to dash to the marked target, dealing additional damage.",
                cost: 0,
                icon: "../assets/images/champions/akali/shuriken-flip.webp",
                boundKey: "E",
                video: "../assets/videos/champions/akali/shuriken-flip.mp4"
            },
            ability5: {
                name: "Perfect Execution",
                description: "Akali leaps in a direction, damaging enemies she strikes. Re-cast: Akali dashes in a direction, executing all enemies she strikes.",
                cost: 0,
                icon: "../assets/images/champions/akali/perfect-execution.webp",
                boundKey: "R",
                video: "../assets/videos/champions/akali/perfect-execution.mp4"
            }
        }
    }
}

/******************************************
*******************************************
***** ENUM-esque OBJECTS SECTION
*******************************************
******************************************/

const ChampionRoles = Object.freeze({
    // FIGHTERS
    DIVER: "Diver",
    FIGHTER: "Fighter",
    JUGGERNAUT: "Juggernaut",
    // MAGES
    ARTILLERY: "Artillery",
    BATTLEMAGE: "Battlemage",
    BURST: "Burst",
    MAGE: "Mage",
    // SUPPORTS
    CATCHER: "Enchanter",
    ENCHANTER: "Enchanter",
    SUPPORT: "Support",
    // ASSASSINS
    ASSASSIN: "Assassin",
    SKIRMISHER: "Skirmisher",
    // MARKSMEN
    MARKSMAN: "Marksman",
    // SPECIALISTS
    SPECIALIST: "Specialist",
    // TANKS
    TANK: "Tank",
    VANGUARD: "Vanguard",
    WARDEN: "Warden"
})

const Lanes = Object.freeze({
    TOP: "Top",
    JUNGLE: "Jungle",
    MIDDLE: "Middle",
    BOTTOM: "Bottom",
    SUPPORT: "Support"
})

const Difficulty = Object.freeze({
    EASY: "Easy",
    MEDIUM: "Medium",
    HARD: "Hard"
})

/******************************************
*******************************************
***** CHAMPION HERO BANNER SECTION
*******************************************
******************************************/
function displayChampionInfo(championKey) {
    const champion = Champions[championKey];
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
}

/******************************************
*******************************************
***** ABILITIES PREVIEW SECTION
*******************************************
******************************************/

function displayAbilityHeader() {
    let header = document.getElementById("header");
    let headerType = document.createElement("h1");
    headerType.textContent = "Abilities";

    header.appendChild(headerType);
}

function displayAbilityNavs(championName) {
    try {
        const champion = Champions[championName];

        if (!champion || !champion.abilities) {
            throw new Error(`Error in displayChampionAbilities:
                             Champion "${championName}" or abilities not found.`);
        }

        const abilitiesContainer = document.getElementById("abilities-buttons-container");

        for (const key in champion.abilities) {
            let ability = champion.abilities[key];

            // Create the ability wrapper
            let abilityWrapper = document.createElement("button");
            abilityWrapper.classList.add("ability-wrapper");

            // Create the icon element
            let icon = createAbilityElement("icon", "img", ability.icon, ability.name);
            
            // Create the name banner element
            let nameBanner = createAbilityElement("name-banner", "h5", null, ability.name);

            // Append both elements to the wrapper
            abilityWrapper.appendChild(icon);
            abilityWrapper.appendChild(nameBanner);

            // Append the wrapper to the abilities container
            abilitiesContainer.appendChild(abilityWrapper);
        }
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


// Helper function
function createAbilityElement(wrapperClass, elementType, src = null, textContent) {
    let wrapper = document.createElement("div");
    wrapper.classList.add(wrapperClass);

    let element = document.createElement(elementType);
    
    if (src) {
        element.src = src;
        element.alt = textContent;
    } else {
        element.textContent = textContent;
    }

    wrapper.appendChild(element);
    return wrapper;
}

/******************************************
*******************************************
***** LISTENER FUNCTIONS
*******************************************
******************************************/

document.getElementById("abilities-buttons-container").addEventListener("click", function(event) {
    const clickedButton = event.target.closest(".ability-wrapper");
    if (!clickedButton) return; // Ignore clicks outside the buttons

    let championName = getChampionFromURL(); // Fetch current champion
    let champion = Champions[championName];

    if (!champion || !champion.abilities) {
        console.error(`Error: No data found for champion "${championName}".`);
        return;
    }

    // Get all ability buttons and determine which was clicked
    let buttons = Array.from(document.querySelectorAll(".ability-wrapper"));
    let index = buttons.indexOf(clickedButton);
    
    if (index === -1) {
        console.error("Error: Could not determine ability index.");
        return;
    }

    // Match index to ability key (e.g., 0 → ability1, 1 → ability2, etc.)
    let abilityKey = `ability${index + 1}`;
    let ability = champion.abilities[abilityKey];

    if (!ability) {
        console.error(`Error: Ability data for "${abilityKey}" not found.`);
        return;
    }

    // Call setAbilitySpotlight with the fetched ability
    setAbilitySpotlight(championName, ability);
});


function handleChampionSelection() {
    document.getElementById("champion-select").addEventListener("change", function () {
        let selectedChampion = this.value;

        if (selectedChampion) {
            window.location.href = `champion.html?champion=${selectedChampion}`;
        }
    });
}

function getChampionFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("champion") || "defaultChampion";
}

/******************************************
*******************************************
***** DRIVER FUNCTIONS
*******************************************
******************************************/

// Populate Champion information
function displayChampion(championKey) {
    let banner = document.getElementById("champion-banner");
    banner.innerHTML = ""; // Clear previous content

    displayChampionHeroImage(championKey);
    displayChampionTitle(championKey);
    displayChampionBio(championKey);
}
// Populate Abilities section
function initializeAbilitiesSection(champion) {
    displayAbilityHeader();
    displayAbilityNavs(champion);

    // For the initial page launch
    let championData = Champions[champion];

    if (championData && championData.abilities && championData.abilities.ability1) {
        setAbilitySpotlight(champion, championData.abilities.ability1);
    } else {
        console.error(`Error: Default ability1 not found for ${champion}`);
    }
}

// Populate the page
document.addEventListener("DOMContentLoaded", () => {
    handleChampionSelection();

    // Get champion from URL
    let champion = getChampionFromURL();

    // Display champion info
    displayChampionInfo(champion);
    initializeAbilitiesSection(champion);
});