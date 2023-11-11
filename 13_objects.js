// crating a objects 
const mysym = Symbol("key1")
const objects = {
    name:"ashokvanjara",

    "fullname":"this is ashok vanjara",
    [mysym] : "mykey",
    Mo:997818444,
    study:"COmputer enginerring",
    department:"javascript",
    email:"ashokvanjara@gmail.com",
    village:"Dachaka"
}

// console.log(objects.Mo);
console.log(objects["name"]);
// console.log(objects["fullname"]);
// console.log(objects[mysym]);
// objects.email = "ashokvajara@2124";
// Object.freeze(objects)            // freeze objects Data's
// objects.email = "ashok12@gmail";
// console.log(objects);