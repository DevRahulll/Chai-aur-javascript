// Arrays

const arr=[0,3,4,3,5];
const hero=["shaktiman","krrish","ra.one"]

// console.log(hero[2]);

// +++++++++++++++++++++++++++++++++++++++
// Array Methods

const myarr=new Array(1,2,3,4,);

// myarr.push(9);
// myarr.pop();

// myarr.unshift(8);
// myarr.shift();


// console.log(myarr.includes(8));
// console.log(myarr.indexOf(3));

const newArr=myarr.join()
// console.log(newArr);
// console.log(myarr);

// slice and splice

console.log("A. ",myarr)

const myn1=myarr.slice (1,3);

 
console.log(myn1);
console.log("B. ",myarr);

const myn2=myarr.splice(1,3); 
console.log("C. ", myarr);
console.log(myn2);
