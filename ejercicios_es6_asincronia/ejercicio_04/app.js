const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const agesAbove18 = ages.filter(age => age > 18);
console.log(agesAbove18);
// -------------------------------
const evenNumbers = ages.filter(evenNumber => evenNumber % 2 == 0);
console.log(evenNumbers);
// -------------------------------
const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];
const gameMorePlayed = streamers.filter(game => game.gameMorePlayed === 'League of Legends');
console.log(gameMorePlayed);
// -------------------------------
const nameWithU = streamers.filter(streamer => streamer.name.includes('u'));
console.log(nameWithU);
// -------------------------------
const gameMorePlayed2 = streamers.filter(streamer => streamer.gameMorePlayed.includes('Legends')).map(streamer => streamer.age > 35 ? 
    { ...streamer, gameMorePlayed: streamer.gameMorePlayed.toLocaleUpperCase() } : streamer);
console.log(gameMorePlayed2);