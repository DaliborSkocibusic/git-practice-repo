// Variables inside block scope

const circleArea = (r) => {
    return Math.PI * r **2;
    // const area = Math.PI * r ** 2;
    // return area;
};

console.log(circleArea(3));


const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};
console.log(fullName("Bob", "Smith"));

// Fails for let, local scope
if (true) {
    let local = "Using Let";
}

// Succes for var, global scope
if (true) {
    var global = "Using Var";
}

// console.log(local);
console.log(global);


conosle.log(circleArea(3));

console.log(fullName(Bob, Smith));