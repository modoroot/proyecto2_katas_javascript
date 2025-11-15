const game = { title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020 };
const { title, gender, year } = game;
console.log(`${title}, ${gender}, ${year}`);
// -------------------------------
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [first, second, third] = fruits;
console.log(`${first}, ${second}, ${third}`);
// -------------------------------
const animalFunction = () => {
    return { name: 'Bengal Tiger', race: 'Tiger' }
};
const { name, race } = animalFunction();
console.log(`${name}, ${race}`)
// -------------------------------
const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] };
const { name: carName, itv } = car;
const [itvYear1, itvYear2, itvYear3] = itv;
console.log(`${carName}, ${itv}, ${itvYear1}, ${itvYear2}, ${itvYear3}`);