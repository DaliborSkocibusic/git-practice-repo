// Promises

function wait(ms) {
    let start = Date.now();
    let now = start;

    while (now - start < ms) {
        now = Date.now();
    }
}

// wait(3000);

function sayHello() {
    console.log("Hello");
}

// console.log("Start my program");

// Set timeout is non blocking code
setTimeout(sayHello, 3000);

// console.log("Continue my program");
setTimeout(() => {
    console.log("After 3 seconds do this");
}, 3000);

// Promises have three states
// Pending - Promise contract hasnt happened yet
// Rejected - Promise was not fulfiled
// Fulfilled - Promised was satisfied

const myFirstPromise = Promise.resolve("Hello World");
console.log("First promise is " + myFirstPromise);

const myBrokenPromise = Promise.reject("Goodbye World");
console.log("Broken promise is " + myBrokenPromise);

console.log("Code continues");

const myRealPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I had to wait for this");
    }, 5000);
});

console.log("My real promise is " + myRealPromise);
myRealPromise.then((value) => {
    console.log(value).catch((error) => console.log(error.message));
});
