// if else , Nested if else, switch

const isUserloggedIn = true;
const temperature = 30;

// if(temperature===30){
//     console.log(" temperature less than 30");
// }
// else{
//     console.log("temperature is greater than 30");
// }

const score = 200;

// if (score > 100) {
//     let power = "fly";
//     console.log(`User Power: ${power}`);
// }


// +++++++++++++++++++++++++++ SWITCH+++++++++++++++++++
const month="march";

// switch (month) {
//     case "jan": 
//     console.log("January");
//         break;
//         case "feb":console.log("February");
//         break;
//         case "march":console.log("March");
//         break;
//     default:console.log("Please enter a right number");
//         break;
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const emptyObj={}

// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty");
// }


// Ternary Operator

const iceteaPrice=100;

iceteaPrice<=50 ? console.log("less than  50") :console.log("greater than 50");