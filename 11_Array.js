// // Arrays 

let names = ["ashok","ajaya","naresh","vikas",12,true];
// names.push("pich") //adding the new array variable
// names[0] = "nami" //when you change the array names and types
// console.log(names);
// // console.log(names.length);
// // console.log(names[2]);
// // console.log(Object.keys(names)); indexing the number.


//  array methods

// names.push("react js")
// names.pop();//remove array last element
// names.unshift(123)
// names.shift();
// console.log(names);

let newArray = [1,2,3,4,5,6,7,8,9];

// console.log(newArray.includes(9));
// console.log(newArray.indexOf(9));


// let connect = newArray.join();
// console.log(typeof connect);


// slice or splice 
// console.log("original Array",newArray);
const myarray = newArray.slice(1,3);

console.log("original Array",newArray);
console.log("Slice Array",myarray);

const myarray2 = newArray.splice(1,3);

console.log("spllice Array",myarray2);