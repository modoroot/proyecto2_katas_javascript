const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
  let nonDupList = [];
  for (const element of list) {
    if (!nonDupList.includes(element))
      nonDupList.push(element);
  }
  return nonDupList;
}

console.log(removeDuplicates(duplicates));