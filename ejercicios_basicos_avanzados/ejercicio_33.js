const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
};

//creo que me he complicado más de la cuenta
function getCapital(country) {
    if (Object.hasOwn(capitals, country))
        return Object.getOwnPropertyDescriptor(capitals, country).value;
    else
        return `el país indicado no está en la lista`;
}

console.log(getCapital("Ireland"));