const student1 = "Sam";
const student2 = "Sophie";
const student3 = "David";
const student4 = 4;

// Function syntax ES5

const cars = [student1, student2, student3, student4];

for (let i = 0; i < cars.length; i++) {
    console.log(introduceYourself(cars[i]));
}

function introduceYourself(name) {
    const introduction = "Hi my name is: " + name;
    return introduction;
}
