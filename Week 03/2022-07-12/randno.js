// MVP
// Create a function that returns a list of random whole numbers given a range
// Create a function called generateNumbers
// This function should take in 2 numbers
// n being the number of numbers to be generated
// r being the max range
// E.g: n: 10, r: 20: function will generate 10 random numbers between 0 and 20
// Function should return n numbers in range 0 <= n < r

function generateNumber(n, r) {
    let retList = [];
    for (let i = 0; i < n; i++) {
        retList.push(parseInt(Math.random() * r));
    }

    return retList;
}

for (let i = 0; i < 10; i++) {
    console.log("Testing random numbers between 0 and " + 100 + "\n");
    console.log(generateNumber(5, 100) + "\n");
}

// Bonus
// Add an argument to your function called isUnique
// If this is set to true, there should be no duplicate numbers in the output
// Bonus
// Add validation to your function to prevent negative values for n and r
// Add validation to ensure n < r when isUnique is true

function generateNumberUnique(n, r, isUnique) {
    let retList = [];
    let getNum = 0;

    if (n < 0 || r < 0) {
        return "Cannot generate a negative number";
    }
    
    if (isUnique && n >= r) {
        return "Cannot generate a negative number";
    }

    for (let i = 0; i < n; i++) {
        getNum = parseInt(Math.random() * r);
        if (isUnique) {
            while (retList.includes(getNum) == true)
                getNum = parseInt(Math.random() * r);
        }
        retList.push(getNum);
    }

    return retList;
}

for (let i = 0; i < 10; i++) {
    console.log("UNIQE: Testing random numbers between 0 and " + 100 + "\n");
    console.log(generateNumberUnique(5, 7, true) + "\n");
}
