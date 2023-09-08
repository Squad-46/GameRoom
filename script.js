const links = {
    game1: "https://narayanasabari.github.io/Kalvium-Labs/CA%20%7C%20Slide%20X%20%28Game%20Development%29/player_info.html",
    game2: "https://anam-ashraf7.github.io/Heavenly-drops/",
    game3: "https://k-46.github.io/CA-2-Mind-Matrix/",
    game4: "https://alwinsunil.github.io/block-puzzle/",
    game5: "https://vedhamadival.github.io/Spooked-Mind/",
    game6: "https://kavin0m.github.io/KeyboardSmasher/",
    game7: "https://alexcfrost.github.io/Enigma-Labyrinth/",
    game8: "https://aaryanpanda.github.io/Asteroids-Assault/",
    game9: "https://mugunthan-701.github.io/assesmentorca/start",
    game10: "https://velavan-sr.github.io/CA-2/",
    game11: "https://melvin0070.github.io/Space-Explorer/",
    game12: "https://snegan29.github.io/Game-CA/index",
    game13: "https://guru-vedhanth.github.io/Projects/CA/index.html"
}

document.addEventListener("click",(e)=>{
    let temp = e.srcElement.parentElement.id
    if (temp.includes("game")){
        window.open(links[temp])
    }
})
