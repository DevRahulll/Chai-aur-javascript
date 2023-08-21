function multipleBy5(num){
    return num*4;
}
multipleBy5.power=2;

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username,score){
    this.username=username
    this.score=score
}

const chai=new createUser("dev",46);
const tea=createUser("mahato",64)