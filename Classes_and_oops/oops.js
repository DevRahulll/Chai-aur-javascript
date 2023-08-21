const user={
    username:"Rahul",
    loginCount:9,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user Details from database");
        // console.log(`Username:${this.username}`);
        console.log(this);
    }
}

// console.log(username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isloggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isloggedIn=isloggedIn;

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne=new User("rahul",13,true)
const usertwo=new user("dev",40,false)
console.log(userOne.constructor);

