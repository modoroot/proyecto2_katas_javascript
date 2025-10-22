const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];

function repeatCounter(list) {
    const numWords = {};
    for (const word of list) {
        if (numWords[word])
            numWords[word]++;
        else
            numWords[word] = 1;
    }
    return numWords;
}

console.log(repeatCounter(words))
