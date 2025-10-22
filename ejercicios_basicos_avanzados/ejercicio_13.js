const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];
//igualo nameCheck a vacío por si no se pasa ningún valor 
// para que igualmente devuelva false y no dé error
function nameFinder(nameList, nameCheck = "") {
    for (const name of nameList) {
        if (name.toLowerCase() === nameCheck.toLowerCase())
            //podría devolver simplemente un string diciendo true y la posición, pero me da toc
            return [true, `posición ${nameList.indexOf(name)}`];
    }
    return false;
}

console.log(nameFinder(names, "peter"))