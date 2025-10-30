const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement("ul");
document.body.appendChild(ul);
for (const country of countries) {
    const li = document.createElement("li");
    li.textContent = country;
    ul.appendChild(li);
}
// --------------------------------
const removeFnQuery = document.querySelector(".fn-remove-me");
removeFnQuery.remove();
// --------------------------------
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const dataFunctionPrint = document.querySelector('[data-function="printHere"]');
const ulData = document.createElement("ul");
dataFunctionPrint.appendChild(ulData);
for (const car of cars) {
    const li = document.createElement("li");
    li.textContent = car;
    ulData.appendChild(li);
}
// --------------------------------
const countriesArray = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];
for (const country of countriesArray) {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");
    document.body.appendChild(div);
    div.appendChild(h4);
    h4.textContent = country.title;
    div.appendChild(img);
    img.setAttribute("src", country.imgUrl);
}
// --------------------------------
const button = document.createElement("button");
button.textContent = "elimina último";
button.setAttribute("type", "button");
document.body.appendChild(button);
button.addEventListener('click', () => {
    const divs = document.querySelectorAll("div:not([data-function])");
    const lastDiv = divs[divs.length - 1];
    if (lastDiv)
        lastDiv.remove();
});
// --------------------------------
const divsImgs = document.querySelectorAll("div:not([data-function])");
//para que no tenga dos botones el último div
const lastDiv = divsImgs[divsImgs.length - 1];
for (const divImg of divsImgs) {
    if (lastDiv == divImg)
        continue;
    const button = document.createElement("button");
    button.textContent = "eliminar";
    button.setAttribute("type", "button");
    divImg.appendChild(button);
    button.addEventListener('click', () => {
        divImg.remove();
    });
}