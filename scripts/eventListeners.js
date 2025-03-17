import { getChampionFromURL } from "./championUtils.js";
import { setAbilitySpotlight } from "./abilities.js";

document.getElementById("abilities-buttons-container").addEventListener("click", function(event) {
    const clickedButton = event.target.closest(".ability-wrapper");
    if (!clickedButton) return;

    let championName = getChampionFromURL();
    let champion = fetchChampionData(championName);

    let buttons = Array.from(document.querySelectorAll(".ability-wrapper"));
    let index = buttons.indexOf(clickedButton);
    if (index === -1) return;

    let abilityKey = `ability${index + 1}`;
    let ability = champion.abilities[abilityKey];

    if (ability) {
        setAbilitySpotlight(championName, ability);
    }
});

document.getElementById("champion-select").addEventListener("change", function () {
    let selectedChampion = this.value;
    if (selectedChampion) {
        window.location.href = `champion.html?champion=${selectedChampion}`;
    }
});