// for of

const arr = [1, 3, 5, 6, "ashko"];
for (const value of arr) {
        // console.log(value);
}

const greetings = "Helllo ashok";
for (const greet of greetings) {
        // console.log(`each of character ${greet}`);
}

const map1 = new Map();
map1.set("In", "India");
map1.set("Us", "United of america");
map1.set("J", "japan");
// console.log(map1.get("In"));
// console.log(map1);

for (const [key, value] of map1) {
        // console.log(key, ':-', value);
}

// ṃake it forin loop


const myobject = {
        name: "swift",
        model: "2023",
        variant: "base",
        launch_date: "203-02-21",
        color: "white,black,etc"
}
// console.log(myobject);

for (const key in myobject) {

        // console.log(`${key} shortcut is for - : ${myobject[key]}`);
}

const programing = ["js","python","java","master"];

for (const key in programing) {
        // console.log(programing[key]);
        // console.log(`key is ${key} -: = ${programing[key]} `);
}