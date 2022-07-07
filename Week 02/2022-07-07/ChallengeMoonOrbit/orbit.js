// MVP
// Write a function that takes in a number of earth days, and returns the number of orbits the moon can perform given days.
// moonOrbits(54) => 2
// moonOrbits(365) => 13.359

function moonOrbits(earthDays) {
    return earthDays / 27.322404;
}
console.log("------------------------");
console.log("moonOrbits of 54: Expecting 2: " + moonOrbits(54).toFixed(0));
console.log(
    "moonOrbits of 365: Expecting 13.359: " + moonOrbits(365).toFixed(3),
);
console.log("------------------------");

// Challenge: Working with Circles
// MVP
// Write a function that takes the radius of a circle and return its area.
// Write a function that takes the radius of a circle and return its perimeter.
// circleArea(10) => 314.16
// circlePerimeter(10) => 62.83

function circleArea(rad) {
    return rad ** 2 * Math.PI;
}

function circlePerimeter(rad) {
    return rad * 2 * Math.PI;
}

console.log("CircleArea of 10: Expecting 314.16: " + circleArea(10).toFixed(2));
console.log(
    "CirclePerimeter of 10: Expecting 62.83: " + circlePerimeter(10).toFixed(2),
);
console.log("------------------------");
// Challenge: Years to Days & Seconds
// MVP
// Create a function that takes your age in years and returns your age in days.
// Create a function that takes your age in years and returns your age in seconds.

function yearsToDays(years) {
    return years * 365;
}

function yearsToSeconds(years) {
    return years * 365 * 24 * 60 * 60;
}

console.log("My age in years (37) in days is: " + yearsToDays(37));
console.log("My age in years (37) in seconds is: " + yearsToSeconds(37));
console.log("------------------------");
