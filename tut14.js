// For each Loop


const coding=["javascript","java","cpp","python"]

// coding.forEach(function (item){
//     console.log(item);
// })





// coding.forEach((item)=>{
//     console.log(item);
// })



// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)


const mycoding=[
    {
        languageName:"js",
        languageFilename:"js"
    },
    {
        languageName:"cpp",
        languageFilename:"cpp"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageName);
})