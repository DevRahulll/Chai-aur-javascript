// Arrow function and this

const user={
    username:"rahul",
    price : 10000,
    
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to the Website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

const chai = () =>{
    let username="Rahul";
    console.log(this);
}

// chai()

// const add=( num1,num2)=>num1+num2 
const add=( num1,num2)=>(num1+num2)

console.log(add(4,4));