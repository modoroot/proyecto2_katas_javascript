const button = document.querySelector(".showme");
console.log(button);
// --------------------------------
const h1 = document.querySelector("#pillado");
console.log(h1);
// --------------------------------
const pAll = document.querySelectorAll("p");
for (const p of pAll) {
    console.log(p);
}
// --------------------------------
const pkmnAll = document.querySelectorAll(".pokemon");
for (const pkmn of pkmnAll) {
    console.log(pkmn);
}
// --------------------------------
//podría haberlo hecho simplemente seleccionando la etiqueta span, pero no creo que hubiese sido correcto
//teniendo en cuenta el enunciado
const dataFunctionAll = document.querySelectorAll('[data-function="testMe"]');
for (const dataFunction of dataFunctionAll) {
    console.log(dataFunction);
}
// --------------------------------
const dataFunctionThree = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(dataFunctionThree.textContent);