const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];
let usersMap = users.map(username => username.name);
console.log(usersMap);
// -------------------------------
usersMap = users.map(usernameAnacleto => usernameAnacleto.name.startsWith("A") ? "Anacleto" : usernameAnacleto.name);
console.log(usersMap);
// -------------------------------
const cities = [
    { isVisited: true, name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' }
];
const citiesMap = cities.map(citiesVisited => citiesVisited.isVisited ? `${citiesVisited.name} (visitado)` : citiesVisited.name);
console.log(citiesMap);