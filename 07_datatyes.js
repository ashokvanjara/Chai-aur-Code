// two types of datatypes primitive and non primitive
// 1 string number boolean null Bigint undefined symbol

const score  = 23;
const valueScore = 12.3;

const isLogddin = true;
let userEmail;
const id = 12;
const anotherid = Symbol(12);

console.log(id===anotherid);

const Bigint = 14225341225454444n;
// 2. non primitive(refrence)
// array objects functions


const names = ["ashok","rihana","prihana"];
// console.log(names);
let obj = {
    surname:"vanjra",
    middlename : "ashok",
    lastname:"valjibhai"
    
}


// creating a function in variable
const fun = function name() {
        console.log("hello word");
}

console.log(fun);
