// let n = 4;

// if (n % 2 === 0) {
//     console.log(n + " is even");
// } else {
//     console.log(n + " is odd");
// }

// let n2 = 5;

// if (n2 % 2 === 0) {
//     console.log(n2 + " is even");
// } else {
//     console.log(n2 + " is odd");
// }

for (let i = 0; i < 1000; i++) {
    myFunction(i);
}

function myFunction(n) {
    if (n % 2 === 0) {
        console.log(n + " is even");
    } else {
        console.log(n + " is odd");
    }
}
