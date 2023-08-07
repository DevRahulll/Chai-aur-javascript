// Objects =>
// Objects literals


const mySym=Symbol("key1")


const Jsuser={
    name:"Rahul",
    "full name" :"Rahul Dev Pandit",
    age:18,
    [mySym]:"mykey1",
    location:"Noida",
    email:"rahul@pw.live",
    islogged:true,
    lastLoginDays:["Saturday","Sunday"]
}

// console.log(Jsuser["full name"]);
// console.log(Jsuser);
// console.log(Jsuser[mySym]);

Jsuser.email="rahul@gniot.com";
// Object.freeze(Jsuser);
Jsuser.email="rahul@niet.com";
// console.log(Jsuser["email"]);

Jsuser.greeting=function(){
    console.log("Hello Chai aur code walo");
}

Jsuser.greetingTwo=function(){
    console.log(`hello Js User,${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());