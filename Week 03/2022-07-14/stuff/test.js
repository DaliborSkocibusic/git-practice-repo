const checkStringPalindrome = (stringOne) => {
    let compStr = "";
    let revStr = "";

    console.log("OP 1 is: " + compStr);

    compStr = stringOne.split("").reverse();
    console.log("OP 2is: " + compStr);

    // compStr = compStr.split(",");
    console.log("OP splt is: " + compStr);

    // compStr = compStr.matchAll(/[A-Za-z]/g);
    // console.log("REGES 3 is: " + compStr.match(/[A-Za-z]/));
    console.log("OP 3 is: " + compStr);

    // const nextStr = compStr.split();
    // console.log("nextStr is: " + nextStr);
    console.log("Input is: " + stringOne);
    console.log("OP is: " + compStr);

    return 1; // compStr === stringOne;
};

checkStringPalindrome("red", "green");