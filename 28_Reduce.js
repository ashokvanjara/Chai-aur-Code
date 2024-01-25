const array12 = [12, 34, 45, 56, 67, 56];
// const res = array12.reduce(function (acc, crrval) {
//     console.log(`acc: ${acc}  and crrval: ${crrval}`);
//     return acc + crrval
// }, 4)
// console.log(res);



const mytotal = array12.reduce((acc, currntcal) => acc + currntcal, 0)
// console.log(mytotal);


const shoppingcart = [
    {
        itemName: "js",
        price: 5000
    },
    {
        itemName: "java",
        price: 25000
    },
    {
        itemName: "react",
        price: 1500
    },
]

const buy = shoppingcart.reduce((acc, item) => acc + item.price, 0)

console.log(buy);