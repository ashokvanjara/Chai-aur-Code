const mysysm =Symbol ("key1");

const jsuser = {
    name:"ashokvanjara",
    [mysysm] : "mykey1",
    number:"9978193564",
    adhar_name:"ashokvanjara12",
    status:"marrid",
    gender:"Male",
    hebbits:"coding",
    smoking:"No",
    routin:""
}
// we are accesing of two types
//console.log(jsuser.name);this is not good of way

// console.log(jsuser["name"]);
// console.log(jsuser["number"]);
// console.log(jsuser["adhar_name"]);
// console.log(jsuser["status"]);
// console.log(jsuser[mysysm]);


// chanage the object values
// Object.freeze(jsuser);
// console.log(jsuser);

jsuser.adhar_name = "avivanjara";
// console.log(jsuser);

// staring the function


// jsuser.greeting = function(){
//     console.log("hello world");
// }
// console.log(jsuser.greeting());

// jsuser.greetingTwo = function(){
//     console.log(`hello ${this.name}`);
// }
// console.log(jsuser.greetingTwo());
jsuser.dewali = function(){
    console.log(`Hello ${this.adhar_name}`)
    console.log(`is ${this.name}`);
}
console.log(jsuser.dewali());