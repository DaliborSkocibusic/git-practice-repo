function addStuff(rangeMax) {
    let returnRange = 0;

    for (let i = 0; i <= rangeMax; i++) {
        returnRange += i;
    }
    return returnRange;
}

function addStuffEqn(rangeMax) {
    return rangeMax * (rangeMax + 1) * 0.5; // ((n)(n + 1 ))/ 2
}

let j = 0;
for (var i = 0; i < 100000; i++) {
    console.log("addStuff for i=" + i + " is: " + addStuff(i));
    console.log("addStuffEqn for i=" + i + " is:" + addStuffEqn(i) + "\n");
    if (addStuff(i) == addStuffEqn(i)) {
        j++;
    }
}

console.log("Number of times it was the same:" + j);
let correctper = (i / j) * 100;
console.log("Correct percetnage: " + correctper + "%");
