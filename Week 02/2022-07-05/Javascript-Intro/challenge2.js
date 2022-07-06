console.log(2 == "2"); // True
console.log(2 === 2); // True
console.log(2 === "2"); // False
console.log("2" + 3 == 23); // Not sure, souldnt work. Guess false
console.log("2" + 3 === 5); // False exact equivalent
console.log((10 % 3)); //1
console.log((10 % 3) === 1); // True
console.log(((100 % 7) % 5)); // 14 mod 5 is 4
console.log(((100 % 7) % 5) !== 0); // True
console.log(((100 % 7) % 9) == 2); // False
console.log(!(10 % 2)); // not 5.. false... dont know
console.log(!!!!((10 % 7) % 3)); // 4 nots cancel, 10 mod 7 is 3. so 3 mod 3 whcih is 1
console.log((10 % 3) === -1 % 2); // 1 mod 3 is 1, -1 mod 2 is 1, so true i think
console.log((892783 != "89278" + 3) == 0); // Fasle
console.log(true && false); // False
console.log(false || true); // True
console.log(true || false); // True
console.log(true || false); // True, duplicate
console.log(true || false + true); // true + true = true
console.log(true * false && false + true); // false and false is false, false * true is false, false + true is idk..
console.log(10 && 123 && -1 && 3); // False
console.log(10 && 123 && 0 && 3); // False
console.log((10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1,
); // praseint flse. its all false
console.log("Line 26: " + 3 && "Calum" && ("" || 26)); // false
console.log(
    "Line 28: " + 3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")),
); // false
