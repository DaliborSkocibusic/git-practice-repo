let string = "This is not a panagram";
let alph = "abdefghijklmnopqrstuvwxyz"
let qbf = "The quick brown fox jumped over the lazy dog."

let unique = qbf.toLowerCase().match(/[a-z]/gi);
let unique2 = string.match(/./gi)

let unique3 = unque.match(/(.)\1/) 

if (unique == alph) {
    console.log("WROSK")
    return true;
}
console.log(unique);
