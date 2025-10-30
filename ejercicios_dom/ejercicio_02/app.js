const emptyDiv = document.createElement("div");
document.body.appendChild(emptyDiv);
// --------------------------------
const emptyDivP = document.createElement("div");
document.body.appendChild(emptyDivP);
const emptyP = document.createElement("p");
emptyDivP.appendChild(emptyP);
// --------------------------------
const divP = document.createElement("div");
document.body.appendChild(divP)
for (let i = 0; i < 6; i++) {
    const p = document.createElement("p");
    divP.appendChild(p);
}
// --------------------------------
const dynamicP = document.createElement("p");
dynamicP.textContent = "soy dinámico!";
document.body.appendChild(dynamicP);
// --------------------------------
const h2Fn = document.querySelector("h2.fn-insert-here");
h2Fn.textContent = "Wubba Lubba dub dub";
// --------------------------------
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");
document.body.appendChild(ul);
for (const app of apps) {
    const li = document.createElement("li");
    li.textContent = app;
    ul.appendChild(li);
}
// --------------------------------
const removeClassFn = document.querySelectorAll("p.fn-remove-me");
for (const fn of removeClassFn) {
    fn.remove();
}
// --------------------------------
const firstDiv = document.querySelector("div");
firstDiv.after(document.createElement("p"));
firstDiv.nextElementSibling.textContent = "voy en medio!";
// --------------------------------
const divFn = document.querySelectorAll("div.fn-insert-here");
for (const div of divFn) {
    const pDiv = document.createElement("p");
    pDiv.textContent = "voy dentro!";
    div.appendChild(pDiv);
}