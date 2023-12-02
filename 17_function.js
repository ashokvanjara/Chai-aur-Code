// 1. creating a function with objects
// 2. make a parameter with rest  operator



// solve problem 1


const StudentObj = {
    id: 1,
    name: "ashokvanjara",
    email: "ashokvanjara@gmail",
    Desgignation: "c.p.o",
    shift: 12.30
}

function student() {
    // console.log(`studentObj id is : ${StudentObj.id}`);
    return `studentobj id is ${StudentObj.id} , studentObj name : ${StudentObj.name},email is : ${StudentObj.email},Desstination ${StudentObj.Desgignation} , shift time ${StudentObj.shift}`;
}
let reslt = student();
// console.log(reslt);



function obj1(...number12) {
    return number12;
}
const res = obj1(123445, 34, 45, 56);
console.log(res);

