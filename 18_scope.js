// global scope


let Globalscope = "Hello world";
function explainGlobal() {
    // console.log(Globalscope); // accesible
}
explainGlobal();


// local scope

function Localsope() {
    let exampleLocal = "Local scope here";
    // console.log(exampleLocal);
}
Localsope();


// function scope

// function Funscope() {
//     if (true) {
//         let number = "ashok";
//     }
//     console.log(number);
// }
// Funscope();