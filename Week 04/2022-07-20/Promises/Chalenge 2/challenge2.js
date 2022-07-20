// Create a functino called delayed filter
// Takes and array, a call back and a timout
// Call it twice with diff inputs
// After each promise print the list to the console
// returns a promise Promise<array>

// Create a function called delayedFilter(array, callback, timeout) returns a promise Promise<array>
// array: List to be filtered
// callback: function to filter with
// timeout: the delay time, should default to 2.5 seconds
// Call this function twice with different arrays, callbacks and timeouts
// After each promise resolves print the list to the console
// BONUS: throw an error if the callback is not a function

function delayedFilter(arr, callBack, timeout = 2500) {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof callBack === "function") {
                resolve(callBack(arr));
            } else reject("Not a function");
        }, timeout);
    });
    return myPromise;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = [20, 73, 48, 55, 64, 7, 8];

const myFunc = (arr) => {
    return arr.filter((value) => value % 2 === 0);
};

delayedFilter(arr1, myFunc, 1000)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));

delayedFilter(arr2, myFunc, 500)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));

delayedFilter(arr2, myFunc, 2000)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));

delayedFilter(arr2, "abc", 2000)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
    
console.log("did it die");
