// Iterators

// Array methods
// push, unshift, pop, slice

const nums = [1, 2, 3, 4, 5];

const incrementedNum = [];

for (let i = 0; i < nums.length; i++) {
    incrementedNum.push(nums[i] + i);
}

let array = [];
console.log(incrementedNum);

const myMap = (array, func) => {
    const newArray = [];

    for (let i = 0; i < nums.length; i++) {
        const currentItem = array[i];
        const newValue = func(currentItem);
        newArray.push(newValue);
    }

    return newArray;
};

const increment = (n) => n + 1;
const squared = (n) => n ** 2;

console.log("Using my own map: ", myMap(nums, increment));
console.log("Using my own map squared: ", myMap(nums, squared));

console.log(
    "Using the library map: ",
    nums.map((num) => num + 1),
);

const myFilter = (array, func) => {
    const newArray = [];

    for (let i = 0; i < nums.length; i++) {
        const currentItem = array[i];
        const shouldKeep = func(currentItem);
        if (shouldKeep) newArray.push(currentItem);
    }

    return newArray;
};

const isOdd = (n) => !!(n % 2);
const isEven = (n) => !isOdd(n);
console.log(isOdd(1));
console.log(isEven(1));

console.log("Filtering", myFilter(nums, isEven));

// Test to see if single value passes certain test

const mySome = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        const passedTest = func(currentItem);

        if (passedTest) return true;
    }

    return false;

    // Return boolen for check passing
};

console.log("Checking if div by 3", mySome(nums, n => n % 3 == 0));
console.log("Checking if is even", mySome(nums, isEven));
console.log("Checking if is even", mySome([1, 3, 5], isEven));

const students = ["Matias", "David", "Conner", "Darcy"];


const doesStudStartWithM = (n) => {
    if (n.charAt(0) == 'M') return true; 
}

console.log("Checking if starts with m", mySome(students, doesStudStartWithM))
// alt test using regex
// const startsWithM = c => c.match(/^[Mm]/)?

const myEvery = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        const passedTest = func(currentItem);

        if (!passedTest) return false;
    }

    return true;

    // Return boolen for check passing
};

const isItSixLong = (n) => {
    // if (n.length == 6);
    return (n.length === 6);
}

const students2 = ["Matias", "Conner", "Dracy", "Samuel"];

console.log("Checking if every student has a 6 letter name", myEvery(students2, isItSixLong));

const reverseWhile = (array) => {

    let head =0;
    let tail = array.lenght;
    const arr = [];

    while (head < tail) {
        const last = arr[tail];
        array[tail--] = array[head];
        arr[head++] = last;
    }

    return array;
}

