class User{
    constructor(username) {
        this.username=username
    }
    logMe(){
        console.log(`Username is 
        ${this.username}`);
    }
     static createId(){
        return `345`
    }
}

const Rahul=new User("rahul")
// console.log(Rahul.createId ());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const android= new Teacher("Debu","Debu@bihar.com")
console.log(android.createId());