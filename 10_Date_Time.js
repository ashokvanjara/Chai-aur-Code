// // TO creates dates 
// const mydates =new Date();
// console.log(typeof mydates);
// console.log(mydates.toDateString());
// console.log(mydates.toString());
// console.log(mydates.toTimeString());
// console.log(mydates.toLocaleTimeString());
// console.log(mydates.toUTCString());

// let newMydate = new Date(2023,1,24);
// console.log(newMydate.toLocaleDateString());


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay()+1)
// console.log(newDate.getMonth()-1);

newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate);