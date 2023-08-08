// functions and scope

function myname(){
    console.log("Rahul");
    console.log("Dev");
    console.log("Pandit");
}

// myname();

// functions for addition of two numbers

function addition(number1,number2){
    return number1+number2;
}

// let result=console.log(addition(4,5));

function loginusermessage(username){
    if(!username){
        console.log("Please Enter a Username");
        return
    }
    return `${username} just loggined in`
}

// console.log(loginusermessage());



function calculatecartPrice(...num1){
    return num1
}

// console.log(calculatecartPrice(200,455,54,52,2));

const user ={
    username:"Rahul",
    price:4559
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

const mynewarray=[200,488,100,488]

function returnSecondvalue(getarray){
    return getarray[1]
}

// console.log(returnSecondvalue(mynewarray));
console.log(returnSecondvalue([200,488,3002,4893]));