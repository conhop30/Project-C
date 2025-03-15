
const ABILITY_AMOUNT = 5;
let CHAMPION = "akali"; // TODO: When a new champion is selected, this is refreshed to the current value,
                        // so no true new selection can happen. Fix that.

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
        championImage: "aatrox-hero-image.jpg",
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
    "akali": {
        "bio": "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.",
        "championTitle": "The Rogue Assassin",
        "championName": "Akali",
        "championImage": "akali-hero-image.jpg",
        "abilities": {
            "ability1": {
                "name": "Assassin's Mark",
                "description": "Dealing spell damage to a champion creates a ring of energy around them. Exiting that ring empowers Akali's next Attack with bonus range and damage.",
                "cost": 0,
                "icon": "../assets/images/champions/akali/assassins-mark.webp",
                "boundKey": "Passive",
                "video": "../assets/videos/champions/akali/assassins-mark.mp4"
            },
            "ability2": {
                "name": "Five Point Strike",
                "description": "Akali throws out five kunai, dealing damage based on her bonus Attack Damage and Ability Power and slowing.",
                "cost": 0,
                "icon": "../assets/images/champions/akali/five-point-strike.webp",
                "boundKey": "Q",
                "video": "../assets/videos/champions/akali/five-point-strike.mp4"
            },
            "ability3": {
                "name": "Twilight Shroud",
                "description": "Akali drops a cover of smoke and briefly gains Move Speed. While inside the shroud, Akali becomes invisible and unable to be selected by enemy spells and attacks. Attacking or using abilities will briefly reveal her.",
                "cost": 0,
                "icon": "../assets/images/champions/akali/twilight-shroud.webp",
                "boundKey": "W",
                "video": "../assets/videos/champions/akali/twilight-shroud.mp4"
            },
            "ability4": {
                "name": "Shuriken Flip",
                "description": "Flip backward and fire a shuriken forward, dealing magic damage. The first enemy or smoke cloud hit is marked. Re-cast to dash to the marked target, dealing additional damage.",
                "cost": 0,
                "icon": "../assets/images/champions/akali/shuriken-flip.webp",
                "boundKey": "E",
                "video": "../assets/videos/champions/akali/shuriken-flip.mp4"
            },
            "ability5": {
                "name": "Perfect Execution",
                "description": "Akali leaps in a direction, damaging enemies she strikes. Re-cast: Akali dashes in a direction, executing all enemies she strikes.",
                "cost": 0,
                "icon": "../assets/images/champions/akali/perfect-execution.webp",
                "boundKey": "R",
                "video": "../assets/videos/champions/akali/perfect-execution.mp4"
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

function displayTitle(championKey) {
    const champion = Champions[championKey];
    if (!champion) return;

    let title = document.getElementById("title");

    let titleType = document.createElement("h3");
    titleType.textContent = champion.championTitle;

    let nameType = document.createElement("h1");
    nameType.textContent = champion.championName;

    title.appendChild(titleType);
    title.appendChild(nameType);
}

function displayBio(championKey) {
    const champion = Champions[championKey];
    if (!champion) return;

    let bio = document.getElementById("bio");
    let bioType = document.createElement("p");
    bioType.textContent = champion.bio;

    bio.appendChild(bioType);
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

// Helper function
function createAbilityElement(wrapperClass, elementType, src = null, textContent = "") {
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

function setAbilitySpotlight(championName) {
    try {
        const champion = Champions[championName];

        if (!champion || !champion.abilities) {
            console.error(`Error in setAbilitySpotlight:
                        Champion "${championName}" or abilities not found.`);
            return;
        }

        let spotlightContainer = document.getElementById("ability-spotlight");
        if (!spotlightContainer) {
            console.error("Error: preview-window not found in the DOM.");
            return;
        }

        abilitySpotlight.appendChild(); // Name
        abilitySpotlight.appendChild(); // Bound Key
        abilitySpotlight.appendChild(); // Description

        // Add it all
        spotlightContainer.appendChild(abilitySpotlight);
    } catch (error) {
        console.error(error.message);
    }
}

function createAbilitySpotlightText(championName, name, boundKey, description) {
    const champion = Champions[championName];

    name = document.createElement("h3");
    name.textContent = champion.name;

    boundKey = document.createElement("h4");
    boundKey.textContent = champion.boundKey;

    description = document.createElement("p");
    description.textContent = champion.description;

}

/******************************************
*******************************************
***** LISTENER FUNCTIONS
*******************************************
******************************************/

// document.querySelectorAll(".ability-wrapper").forEach(button => {
//     button.addEventListener("click", function() {
//         let boundKey = ;
//         let description = ;
//         let name = ;

//         setAbilitySpotlight();
//     });
// });

document.getElementById("champion-select").addEventListener("change", function() {
    let selectedChampion = this.value;
    
    if (selectedChampion) {
        CHAMPION = selectedChampion;
        window.location.href = `champion.html?champion=${selectedChampion}`;
    }
});

function setAbilitySpotlight() { /******************* STUB *****************/ }

/******************************************
*******************************************
***** DRIVER FUNCTIONS
*******************************************
******************************************/

// Populate Champion information
function displayChampion() {
    displayTitle(CHAMPION);
    displayBio(CHAMPION);
}

// Populate Abilities section
function initializeAbilitiesSection() {
    displayAbilityHeader();
    displayAbilityNavs(CHAMPION);
    //setAbilitySpotlight("aatrox");
    createAbilityVideo(Champions[CHAMPION].abilities["ability1"].video); 
}

// Populate the page
document.addEventListener("DOMContentLoaded", () => {
    const selectedChampion = Champions.aatrox; // Manually setting it for now

    displayChampion();
    initializeAbilitiesSection();
});