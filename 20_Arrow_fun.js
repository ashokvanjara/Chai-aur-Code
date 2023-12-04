const sangita = {
    Hname: "ashok",
    status: "married",

    Welcomemeessage: function () {
        console.log(`${this.Hname},Husband name`);
        console.log(`${this.status},`);
        console.log("balnk", this);
    }
}
// sangita.Welcomemeessage();

// Change the context value

// sangita.Hname = "aviavanjara";
// sangita.Welcomemeessage()




function Dhokla() {
    // console.log(this);
}
Dhokla();
// this is Arrow function

const ashok = (num1,num2) => {
    console.log("The result is ",num1+num2);
}
ashok(12,45)


const ashok12 = () =>{
    console.log("ashok");
}

ashok12()