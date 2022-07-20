// Create a functino called delay

/*MVP:
Create a function called delayedIncDec that takes n, mode, timeout, which returns a promise of a number
n = an initial number
mode = a string, but only either "inc" or "dec" which will change the functionality
inc will cause the function to increment the number by 1
dec will cause the function to decrement the number by 1
timeout: delay time in ms (how long until the promise resolves)
timeout should have a default value of 2500 if not provided

*/

function delayedIncDec(n, mode, timeout = 2500) {
    // n - number
    // mode - string. "inc" or "dec"
    // inc will cause the function to increment by 1
    // dec will cause the function to decrement by 1
    // delay time (ms)
    try {
        const myPromise = new Promise((resolve, reject) => {
            if (mode === "inc") {
                setTimeout(() => {
                    resolve(n + 1);
                    console.log(n + 1);
                }, timeout);
            } else if (mode === "dec") {
                setTimeout(() => {
                    resolve(n - 1);
                    console.log(n - 1);
                }, timeout);
            } else reject("Did not work");
        });
        return myPromise;
    } catch (error) {
        console.log(error.message);
    }
}

console.log("Promise returned:" + delayedIncDec(10, "inc", 1000));
console.log(
    "My promise then: " +
        delayedIncDec(10, "dec", 1000).then((value) => console.log(value)),
);
console.log("Promise returned:" + delayedIncDec(50, "dec", 500));
console.log("Promise returned:" + delayedIncDec(20, "inc", 2000));
// console.log(delayedIncDec(20, "abc", 2000));
console.log(
    "My promise then: " +
        delayedIncDec(20, "abc", 2000)
            .then((value) => console.log(value))
            .catch((value) => console.log(value)),
);
