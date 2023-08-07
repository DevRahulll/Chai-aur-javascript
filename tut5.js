// Date and Time

let mydate= new Date();
// console.log(mydate.toString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toDateString());
// console.log(typeof mydate);

// let mycreatedDate=new Date(2023,0,23);
// let mycreatedDate=new Date(2023,0,5);
let mycreatedDate=new Date ("01-13-23");

// console.log(mycreatedDate.toLocaleDateString());

let myTimeStamp=Date.now();

// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor (Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleDateString('default',{weekday:"long",})