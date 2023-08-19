const PromiseOne=new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("Async Task is complete");
        resolve();
    }, 1000);
})

PromiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("Async task 2 ");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Rahul" ,email:"rahul@pw"})
    },1000);
});

promiseThree.then(function(user){
   console.log(user);
})


const PromiseFour =new Promise(function(resolve,reject){
    setTimeout(function() {
        let error=false;
        if(!error){
            resolve({username:"Dev",email:"dev@pw.live"})
        }else{
            reject('Error : Something Went Wrong');
        }
    }, 1000);
})
PromiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The Promise is eihter resolved or rejected"))

// const promiseFive=new promise(function (resolve,reject){
//     setTimeout(function() {
//         let error=false;
//         if (!error){
//             resolve({username:"Rahul",password:"dev@123"})
//         }else{
//             reject("Error : Async Went wrong")
//         }
//     }, 1000);
// })

// async function consumepromiseFive(){
//     try{
//         const response=await promiseFive
//         console.log(response);
//     }
//     catch (error){
//         console.log(error);
//     }
// }

// consumepromiseFive()

// async function getAllUsers(){
//     try{
//         const respnse=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E:",error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>console.log(data))
.catch((error)=>console.log(error))