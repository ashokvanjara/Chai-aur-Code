// immediately invoke function
(function Chai() {
    console.log("Db connected");
})();   //The semicolon is the most important part of this function it work like end


((name) => {
    // no iffe
    console.log(`print the name iffe ${name}`);
})("ashok");

(function chaar(name) {
    console.log(`Hello`);
})()
