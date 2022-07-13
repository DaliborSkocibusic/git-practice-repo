// MVP
// Create an array with 3 of your hobbies
hobbyArray = ["Sport", "Video Games", "Swimming"];

// Print in the console the first hobby in the array
console.log("My first hobbies: " + hobbyArray[0]);

// Remove that first hobby from the array and store that hobby in a variable
storedHobby = hobbyArray.shift();
console.log("Shifted value is:" + storedHobby);

// Store the length of the array in a variable
arrayLength = hobbyArray.length;

// Add another hobby at the end of the array
hobbyArray.push("New Hobby");

// Print that last hobby in the console
console.log("The last element inthe array is " + hobbyArray.at(-1));
console.log(
    "The last element inthe array is " + hobbyArray[hobbyArray.length - 1],
);

// Bonus:
// Join all your hobbies in a single string each hobby being comma separated (i.e. "My hobbies are: hobby1, hobby2, hobby2")
returnString = "";

for (let i = 0; i < hobbyArray.length; i++) {
    if (i == 0) {
        returnString += hobbyArray[i];
    } else {
        returnString += ", " + hobbyArray[i];
    }
}
console.log("My hobbies are: " + returnString);

// Spread operators
// Rest operators
const arr = [1, 2, 3, 4];

const [first, ...rest] = arr;

// Removieng array itemss

const abc = [1, 2, 344, 5];
const [firstTiem, ...remainingItems] = abc;

const hobbies = ["lego", "programming", "guitar"];
const [firstHobby, ...restOfHobbies] = hobbies;

// Add new item to end
const swapped = [...restOfHobbies, firstHobby];
