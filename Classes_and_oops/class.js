function SetUsername(username){
    // complex DB calls
    this.username=username;
    console.log("Called");
}

function createUser(username,email,password){
    SetUsername.call(this,username)

    this.email=email;
    this.password=password;
}

const chai=new createUser('Rahul','dev@fb.com','dev234');
console.log(chai);