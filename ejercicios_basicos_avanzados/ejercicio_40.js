const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];


function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() == text.toLowerCase())
      return i;
  }
  return -1;
}

// findArrayIndex(mainCharacters, "Luke");

function removeItem(array, text) {
  const indexRemove = findArrayIndex(array, text);
   if (indexRemove === -1) {
    console.log("no se ha encontrado el elemento");
    return;
  }
  array.splice(indexRemove, 1);
  return array;
}

removeItem(mainCharacters, "leia");
console.log(mainCharacters);