
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

export { Champions };