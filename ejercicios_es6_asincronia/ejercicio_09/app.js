async function loadRandomPokemonImage() {
    try {
        const randomPkmn = Math.floor(Math.random() * 151) + 1;
        const url = `https://pokeapi.co/api/v2/pokemon/${randomPkmn}`;
        const img = document.querySelector(".random-image");
        const response = await fetch(url);
        const data = await response.json();
        const imageUrl = data.sprites.other["official-artwork"].front_default;
        img.setAttribute("src", imageUrl);
    } catch (error) {
        console.error(`error: ${error}`);
    }
}

loadRandomPokemonImage();