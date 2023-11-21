const programing  = ["java","python","js"];
const motherTang = ["Hindi","English","marathi"];

// programing.push(motherTang);
// console.log(programing);
// console.log(programing[3][1]);

// const languages = programing.concat(motherTang);
// console.log(languages);

const languages = {...programing,...motherTang};
console.log(languages);

// const languages = [12,3,5,5,[54,56],54,1,[222]]
// const languages1  = languages.flat(Infinity);
// console.log(languages1);

// console.log(Array.isArray("ashok"));
// console.log(Array.from("ashok"));
// console.log(Array.from({name:"ashok"}));

// let ashok =  233;
// let ashok1 =  2353;
// let ashok3 =  34233;
// console.log(Array.of(ashok,ashok1,ashok3));



