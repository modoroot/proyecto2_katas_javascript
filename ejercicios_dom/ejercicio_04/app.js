const btn = document.createElement("button");
btn.textContent = "click";
btn.setAttribute("id", "btnToClick");
btn.setAttribute("type", "button");
document.body.appendChild(btn);
btn.addEventListener("click", (ev) => { 
    console.log(ev);
});
// --------------------------------
const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", (ev) => {
    console.log(ev.target.value);
});
// --------------------------------
const inputValue = document.querySelector(".value");
inputValue.addEventListener("input", (ev) => {
    console.log(ev.currentTarget.value);
});