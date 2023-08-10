// for in loop

const myobject={
    js:'javascript',
    cpp:'c++',
    py:"python"
}

for (const key in myobject) {
    // console.log(`${key} shorcut is for ${myobject[key]}`);
}

const programming =["js","rb","py","java"]

for (const key in programming) {
    // console.log(programming[key]);
}

// const map =new Map()
// map.set ('IN',"India")
// map.set("USA","United States of America")
// map.set("Fr","France")

// for (const key in map) {
//     console.log(key);
// }  --> not working in for in loop