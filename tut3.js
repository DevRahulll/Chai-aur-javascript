// all about Strings and Methods


const name="Rahul";
let repoCount=39;

// console.log(name + repoCount); => avoid this type method for presenting strings

// console.log(`Hello name is ${name} and my repocount is ${repoCount}` );

const gameName= new String('Density');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("i"));

const newName= gameName.slice(-9,5);
console.log(newName);

const newString="     Mohitosh   ";
console.log(newString);
console.log(newString.trim());

const ign="rahul-dev-dot-com";
console.log(ign.split("-"));