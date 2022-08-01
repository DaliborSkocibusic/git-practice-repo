function toCamelCase(str) {
    let retStr = "";
    let nextUpper = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "_") {
            nextUpper = true;
            continue;
        } else if (nextUpper == true) {
            retStr += str[i].toUpperCase();
            nextUpper = false;
        } else if (str[i] === "-") {
            nextUpper = true;
            continue;
        } else retStr += str[i];
    }
    return retStr;
}

console.log(
    "input : the-stealth-warrier. ouput: " + toCamelCase("the-stealth-warrior"),
);
console.log(
    "input : the_stealth_warrier. ouput: " + toCamelCase("the_stealth_warrior"),
);
