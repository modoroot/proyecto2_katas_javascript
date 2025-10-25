const rollDice = (sidesNum) => Math.floor(Math.random()*sidesNum) + 1;
const roll = rollDice(20);
console.log(roll);