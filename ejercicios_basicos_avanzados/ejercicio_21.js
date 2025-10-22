const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];

const menores = [];
const mayores = [];

//habría usado filter, pero el ejercicio pide que hayan condicionales
for (const user of users) {
    if (user.years < 18)
        menores.push(user);
    else
        mayores.push(user);
}
console.log(`Usuarios menores de edad:`, menores);
console.log(`Usuarios mayores de edad:`, mayores);