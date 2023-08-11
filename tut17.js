// Reduce 

const myNum=[1,3,5,7,9]

// const mytotal=myNum.reduce(function(acc,currval){
//     console.log(`acc :${acc} and current value is ${currval}`)
//     return acc+currval
// },5)

const total=myNum.reduce((acc,curr)=>acc +curr,0)
// console.log(total);


const course=[
    {
        itemName:"js course",
        price:3500
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"DSA course",
        price:2800
    },
    {
        itemName:"React-Native Development",
        price:5000
    }
]

const topay=course.reduce((acc,item)=>acc+item.price,0)

console.log(topay);