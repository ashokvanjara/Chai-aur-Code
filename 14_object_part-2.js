// const tinder_User  = new Object()
const tinder_User = {}
tinder_User.id = "12";
tinder_User.name = "ashok";
tinder_User.loggdin = false;

// console.log(tinder_User);


const regularuser = {
    email: "example@gmail.com",
    Fullname: {
        firstname: "ashok",
        lastname: "vanjara"
    }
}
console.log(tinder_User);
// console.log(regularuser.Fullname.firstname);

const obj1 = { 1: "ashok", 2: "ajay" }
const obj2 = { 3: "ashok", 4: "ajay" }
const obj5 = { 5: "jayesg", 6: "aj" }
const obj6 = { 7: "as", 8: "ay" }
const obj13 = { 9: "shok", 10: "jay" }

// const resultobj = Object.assign({},obj1,obj2,obj5,obj6,obj13)
// const resultobj ={...obj1,...obj2,...obj5,...obj6,...obj13}
// console.log(resultobj);


const users = [
    {
        id: 1,
        email: "ashok@gmail.com"
    },
    {
        id: 2,
        email: "naina@gmail.com"
    }
]
console.log(users);
// console.log(Object.keys(tinder_User));
// console.log(Object.values(tinder_User));
// console.log(Object.entries(tinder_User));

console.log(tinder_User.hasOwnProperty("name")); //it return a value boolean