// OOP for JS

// Object constructor
const coach = {
    firstName: "Remi",
    lastName: "Hoeppe",
    age: 18,
    isFrench: true,
    // Object Method
    checkName() {
        console.log("Name is " + this.firstName);
    },

    addAge(years) {
        this.age += years;
    },
};

// Constructor
// Default value for age shown below
function Coach(firstName, lastName, city, age = 20) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.age = age;
}

const coach2 = new Coach("Bob", "Smith", "Adelaide", 17);

// Can pass undefined to use the default values in constructor

Coach.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};
