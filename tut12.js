// for of loop in Javascript

const arr=[1,3,4,5,6,7];

for (const index of arr) {
    // console.log(index);
}

const greeting ="HEllo World!";

for (const greet of greeting) {
    // console.log(greet);
}

// Maps

const map =new Map()
map.set ('IN',"India")
map.set("USA","United States of America")
map.set("Fr","France")

for (const [key,value] of map) {
    // console.log(key,":-",value);
    
}

