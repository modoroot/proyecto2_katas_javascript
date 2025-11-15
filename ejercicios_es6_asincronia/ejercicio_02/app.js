const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log(pointsListCopy);
// -------------------------------
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyCopy = { ...toy };
console.log(toyCopy);
// -------------------------------
const pointsList2 = [54, 87, 99, 65, 32];
const pointsCopy = [...pointsList, ...pointsList2];
console.log(pointsCopy);
// -------------------------------
//https://cdn.discordapp.com/attachments/1238614286901969029/1436429412764618772/66fexhpa6vwd1.png?ex=690f92a3&is=690e4123&hm=1a460e5da706eb330d6e6414fc9955e52b1d30f54d3a6e053c4ef49d272a7d21&
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const toysCopy = {...toy, ...toyUpdate};
console.log(toysCopy);
// -------------------------------
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors.slice(0,2), ...colors.slice(3)];
console.log(colorsCopy);