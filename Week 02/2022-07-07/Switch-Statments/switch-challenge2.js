// Tell the user what eye colour their child would have.
// Create two variables parent1 and parent2
// Given the eye colour of each parent, it should console log the probability of their child having different eye colours, for example: Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --%
// Use the attached image as a reference

let parent1 = "brown";
let parent2 = "";
let parents = "";

parent1 = "brown";
parent2 = "brown";
parents = parent1 + parent2;
console.log("Parent 1: " + parent1 + " Parent 2: " + parent2);
parentsTest(parent1, parent2);
console.log(parents);
console.log("\n");

parent1 = "green";
parent2 = "brown";
parents = parent1 + parent2;
console.log("Parent 1: " + parent1 + " Parent 2: " + parent2);
parentsTest(parent1, parent2);
console.log("\n");

parent1 = "blue";
parent2 = "brown";
parents = parent1 + parent2;
console.log("Parent 1: " + parent1 + " Parent 2: " + parent2);
parentsTest(parent1, parent2);
console.log("\n");

parent1 = "green";
parent2 = "green";
parents = parent1 + parent2;
console.log("Parent 1: " + parent1 + " Parent 2: " + parent2);
parentsTest(parent1, parent2);
console.log("\n");

parent1 = "green";
parent2 = "blue";
parents = parent1 + parent2;
console.log("Parent 1: " + parent1 + " Parent 2: " + parent2);
parentsTest(parent1, parent2);
console.log("\n");

parent1 = "blue";
parent2 = "blue";
parents = parent1 + parent2;
console.log("Parent 1: " + parent1 + " Parent 2: " + parent2);
parentsTest(parent1, parent2);
console.log("\n");

parent1 = "red";
parent2 = "red";
console.log("parents befre is " + parents);
parents = parent1 + parent2;
console.log("parents after is " + parents);

console.log("Parent 1: " + parent1 + " Parent 2: " + parent2);
parentsTest(parent1, parent2);
console.log("\n");

function parentsTest(parents) {
    console.log("parents is " + parents);
    switch (parents) {
        case "brownbrown": {
            console.log("Brown: 75%, Green: 18.75%, Blue: 6.25%");
            break;
        }

        case "greenbrown": {
            console.log("Brown: 50%, Green: 37.5%, Blue: 12.5%");
            break;
        }

        case "greengreen": {
            console.log("Brown: <1%, Green: 75%, Blue: 25%");
            break;
        }

        case "greenblue": {
            console.log("Brown: 0%, Green: 50%, Blue: 50%");
            break;
        }

        case "bluebrown": {
            console.log("Brown: 50%, Green: 0%, Blue: 50%");
            break;
        }

        case "blueblue": {
            console.log("Brown: 0%, Green: 1%, Blue: 99%");
            break;
        }

        default:
            console.log("Your child will have no eyes");
            break;
    }
}

function parentTest(parent1) {
    switch (parent1) {
        case "brown":
            if (parent2 == "brown") {
                console.log("Brown: 75%, Green: 18.75%, Blue: 6.25%");
                break;
            }

        case "green":
            if (parent2 == "brown") {
                console.log("Brown: 50%, Green: 37.5%, Blue: 12.5%");
                break;
            } else if (parent2 == "green") {
                console.log("Brown: <1%, Green: 75%, Blue: 25%");
                break;
            } else if (parent2 == "blue") {
                console.log("Brown: 0%, Green: 50%, Blue: 50%");
                break;
            }

        case "blue":
            if (parent2 == "brown") {
                console.log("Brown: 50%, Green: 0%, Blue: 50%");
                break;
            }
            if (parent2 == "blue") {
                console.log("Brown: 0%, Green: 1%, Blue: 99%");
                break;
            }

        default:
            console.log("Your child will have no eyes");
            break;
    }
}
