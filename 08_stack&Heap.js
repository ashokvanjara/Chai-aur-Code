// where is used stack and heap


//stack(primitive => int,boolean,string,bigint,double) heap(non-primitive)

let userone = {
    name:"ashok",
    id :1,
    email:"ashok@gmail.com"
};
let usertwo= userone;

usertwo.email=  "ashokvanjara@gmail.com";

console.log(userone.id);
console.log(userone.email);
console.log(usertwo.email);