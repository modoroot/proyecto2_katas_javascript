const selectCharacter = document.querySelector("#character-list");
const imageCharacter = document.querySelector('.character-image');
const urlCharacters = 'https://thronesapi.com/api/v2/Characters';

async function loadCharacters() {
    try {
        const response = await fetch(urlCharacters);
        const data = await response.json();
        for (const character of data) {
            const option = document.createElement('option');
            option.setAttribute("value", character.imageUrl);
            option.textContent = character.fullName;
            selectCharacter.appendChild(option);
        }
        if (data.length > 0) {
            imageCharacter.setAttribute("src", data[0].imageUrl);
            selectCharacter.value = data[0].imageUrl;
        }
    } catch (error) {
        console.error(`error: ${error}`);
    }
}
selectCharacter.addEventListener('change', () => {
    imageCharacter.src = selectCharacter.value;
});

loadCharacters();
