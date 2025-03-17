let cachedChampionData = {}; // Stores fetched champion data

async function fetchChampionData(championKey) {
    console.log(`Fetching data for: ${championKey}`);

    // Check if data is already cached
    if (cachedChampionData[championKey]) {
        console.log(`Using cached data for ${championKey}`);
        return cachedChampionData[championKey];
    }

    try {
        const response = await fetch(`../assets/json/champions/${championKey}.json`);
        
        console.log("Fetch Response:", response); // Log fetch response

        if (!response.ok) {
            throw new Error(`Failed to load ${championKey} data. Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Fetched JSON Data:", data);

        cachedChampionData[championKey] = data;
        return data;
    } catch (error) {
        console.error("Error fetching champion data:", error);
        return null;
    }
}

