// Check for the smallest value
// Create two variables x & y
// Write an if / else block
// It should compare a number x to another number y
// It should print ("x is greater than y") in the console
// Or "x is smaller than y"
// Or "x is equal to y"
// Depending on the value of x and y

console.log("\n" + "Challenge:");

let x = parseInt(3000 * Math.random());
let y = parseInt(3000 * Math.random());

if (x == y) {
    console.log("x: " + x + " is equal to y: " + y);
} else if (x > y) {
    console.log("x: " + x + " is greater than y: " + y);
} else if (x < y) {
    console.log("x: " + x + " is less than y: " + y);
}
console.log("\n" + "Even Test:");

x = 5;
y = 5;

if (x == y) {
    console.log("x: " + x + " is equal to y: " + y);
} else if (x > y) {
    console.log("x: " + x + " is greater than y: " + y);
} else if (x < y) {
    console.log("x: " + x + " is less than y: " + y);
}

console.log("\n" + "Loop Test:");

for (let i = 0; i < 10; i++) {
    x = parseInt(3000 * Math.random());
    y = parseInt(3000 * Math.random());

    if (x == y) {
        console.log("x: " + x + " is equal to y: " + y);
    } else if (x > y) {
        console.log("x: " + x + " is greater than y: " + y);
    } else if (x < y) {
        console.log("x: " + x + " is less than y: " + y);
    }
}
