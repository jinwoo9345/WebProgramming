
const names = ['alice', 'bob', 'charlie'];


const uppercasedNames = names.map(name => name.toUpperCase());

console.log(uppercasedNames);


const capitalStartNames = names.map(
  name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
);

console.log(capitalStartNames);