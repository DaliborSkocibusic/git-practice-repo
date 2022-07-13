// MVP:
// Create a function with a for loop that will add numbers to your shopping list
// Store the following array in a variable
// Your loop should iterate through every value in the array
// Your loop should print a shopping list with the number and the name of the item
// ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];
// =>
// // In Console
// 1. milk
// 2. watermelon
// 3. eggs
// 4. soap
// 5. butter
// 6. apples
// 7. ice-cream

arr = ["milk", "watermelon", "eggs", "soap", "butter", "apples", "ice-cream"];

for (let i = 0; i < arr.length; i++) {
console.log(i+1 +". " + arr[i])
}