const programing = ["js","react js","python","java"];
// programing.forEach(function(item){
//     console.log(item);
// })


// programing.forEach((item)=>{
//     // console.log(item);
// })


function printMe(item){
    // console.log(item);
}
programing.forEach(printMe)


programing.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const destructor_array = [
    {
        name:"ashok",
        surname:"vanjara"
    },
    {
        department:"computer",
        Div:".IT"
    },
    {
        city:"Dahod",
        collge:"GPD"
    }
];
destructor_array.forEach((item)=>{
    console.log(item.name);
})
