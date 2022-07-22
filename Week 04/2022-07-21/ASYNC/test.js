for (let i = 0; i < 10; i += 1) {
    // console.log(i);
}

let arr = new Array(100).fill(0);
// console.log(arr.length)

const source = [1, 2, 3, 4, 5, 6];

// arr2 = arr2.map((value) => value + 2).reverse()

// console.log(arr2)

// const check = false;
// let myValue = 0;
// if (false == check) {
//     myValue = 123;

// }

// console.log(8 || 7 == '8')
let destination = [];
// console.log(destination);

source.map((value) => {
    if (value % 3 === 0) {
        // console.log(value )
        destination.push(value);
    }
});

// console.log(destination);

const s1 = ["R", "e", "m", "i"];
let str = "";
let str2 = "";

// str = s1.reduce((acc, current) => {
//     return str += current;
// }, 0)

// console.log(str)

for (let i = 0; i < 10; ++i) {
    str += i;
}
// console.log(str)
// let a = (("ba" + "a") + "a")
// console.log(a.toLowerCase())
// console.log((("ba" + "a") + "a").toLowerCase());

// const arr2 = new Array(2).fill(null);
// console.log(`Aspi${arr2.pop() ?? "ra"}tions`)

// const person = { name: "Allen" };
// console.log(`${(`` + person.age)}`);
// console.log(`${(`` + person.age).slice(4,6)}`);
// console.log(`${(`` + person.age).slice(4,6)}nance`);

// const firstName = "Aiden";

// let i =0;
// let byteSum = 0;

// while (i < firstName.length) {
//     byteSum += firstName.charCodeAt(i);
//     i++;
// }

