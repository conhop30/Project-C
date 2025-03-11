
// Data driven, right?
// TODO: Make it so that these are attributes in an object.
championBio = "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance."
championTitle = "The Darkin Blade"
championName = "Aatrox"
championImage = "filler.jpg"
championClassifictions = "Fighter" // Make an ENUM later

function displayTitle() {
    // First, the formal title
    let title = document.getElementById("title");
    let titleText = document.createElement("h3");
    titleText.textContent = championTitle;
    title.appendChild(titleText);
    
    // Second, the name
    let name = document.getElementById("title");
    let nameText = document.createElement("h1");
    nameText.textContent = championName;
    name.appendChild(nameText);
}

function displayBio() {
    let bio = document.getElementById("bio");
    let bioText = document.createElement("p");
    bioText.textContent = championBio;
    bio.appendChild(bioText);
}

// Run all initial functions
document.addEventListener("DOMContentLoaded", displayBio);
document.addEventListener("DOMContentLoaded", displayTitle);