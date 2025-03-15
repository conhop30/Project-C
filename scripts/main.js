document.getElementById("champion-select").addEventListener("change", function() {
    let selectedChampion = this.value;
    
    if (selectedChampion) {
        window.location.href = `champion.html?champion=${selectedChampion}`;
    }
});
