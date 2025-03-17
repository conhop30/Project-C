import { getChampionFromURL } from "./championUtils.js";
import { displayChampion } from "./championDisplay.js";
import { initializeAbilitiesSection, displayAbilityNavs } from "./abilities.js";

document.addEventListener("DOMContentLoaded", async () => {
    let champion = getChampionFromURL();
    displayChampion(champion);
    initializeAbilitiesSection(champion);
    await displayAbilityNavs(champion);
});