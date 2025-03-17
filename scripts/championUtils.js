import { Champions } from "./championData.js";

function getChampionFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("champion") || "defaultChampion";
}

async function fetchChampionData(championKey) {
    try {
        const response = await fetch(`../assets/json/champions/${championKey}.json`);
        if (!response.ok) throw new Error("Failed to load champion data.");
        return await response.json();
    } catch (error) {
        console.error("Error fetching champion data:", error);
        return null;
    }
}

export { getChampionFromURL, fetchChampionData };
