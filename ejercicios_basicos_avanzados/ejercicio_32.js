const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
];

//no sé si es así, porque el enunciado dice que devuelva el más antiguo, pero hay varios
//con el mismo año más antiguo, así que lo que he hecho es que devuelva todos los miembros
//del año más antiguo
function findOldestXMen(xMen) {
    let oldestXMenYear = xMen[0].year;
    for (const element of xMen) {
        if (element.year < oldestXMenYear)
            oldestXMenYear = element.year;
    }
    const oldestXMen = xMen.filter(element => element.year === oldestXMenYear)
    return oldestXMen;
}

console.log(findOldestXMen(xMen));