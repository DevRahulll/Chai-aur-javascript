// Higher Order function

const powertwo=(n)=>{
    return n**2;
}

function powercube(powertwo,n){
    return powertwo(n)*n;
}

// console.log(powercube(powertwo,3));
function sayHello(){
    return()=>{
        console.log(`Hello from Rahul`);
    }
}
let guessvalue=sayHello()
// console.log(guessvalue);
// guessvalue();

const HigherOrder = n=>{
    const onefun=m=>{
        const twofun=p=>{
            return m+n+p;
        }
        return twofun;
    } 
    return onefun;
}

// console.log(HigherOrder(2)(3)(4));

const mynums=[2,3,5,4];

const sumarray=arr=>{
    let total=0;
    arr.forEach(function(element){
        total+=element
    });
    return total;
}

// console.log(sumarray(mynums));

function onemoreHello(){
    console.log("Hello Rahul !!",Math.random());
}

// setInterval(onemoreHello,5000);

setTimeout(onemoreHello,2000);