const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' },
    { name: 'invent', power: 'teleportation' }
];

function findMutantByPower(mutants, power = "") {
    let mutantsSamePower = [];
    for (const mutant of mutants) {
        if (mutant.power == power)
            mutantsSamePower.push(mutant)
    }
    if (mutantsSamePower.length > 0)
        return `mutantes encontrados con ${power}: ${mutantsSamePower.map(mutant => mutant.name)}`;
    else
        return `no ha encontrado mutantes con ese poder`;
}

console.log(findMutantByPower(mutants, "teleportation"));