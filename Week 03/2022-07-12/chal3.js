// MVP
// Create a variable with a string of your choice

let myString = "hello world";
// Loop through the letters in this string and build a new string
// If the current index is odd, capitalize the letter before adding it to the new string

function build(myString) {
    let retString = "";

    for (let i = 0; i < myString.length; i++) {
        if (i % 2 === 1) {
            // Odd index, capitalize
            retString += myString.charAt(i).toUpperCase();
        } else {
            retString += myString.charAt(i); // Not sure if i need to.toLowerCase();
        }
    }

    return retString;
}

function buildBonus(myString) {
    let retString2 = "";

    for (let i = 0; i < myString.length; i++) {
        if (i % 2 === 1) {
            // Odd index, capitalize
            retString2 += myString.charAt(i).toUpperCase();
        } else {

            // Bonus
            retString2 += String.fromCharCode(
                myString.charAt(i).charCodeAt(0) + 1,
            ); // Not sure if i need to.toLowerCase();
        }
    }
    return retString2;
}
console.log(build(myString));
console.log(buildBonus(myString));

```
function rsh(char) {
	let alpha = "abcdefghijklmnopqrstuvwxyz";
	return char.match(/[a-zA-Z]/g)
		? alpha.charAt((alpha.indexOf(char) + 1) % 26)
		: char;
}
```;
