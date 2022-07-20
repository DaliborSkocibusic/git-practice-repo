// Complex Data

const coaches = [
    {
        id: 1,
        firstName: "John",
        lastName: "Smith",
        age: 19,
        title: "Junior Coach",
    },

    {
        id: 2,
        firstName: "Sam",
        lastName: "Smith",
        age: 18,
        title: "Junior Coach",
    },

    {
        id: 3,
        firstName: "Bob",
        lastName: "Gregory",
        age: 25,
        title: "Senior Coach",
    },
];

console.log(coaches[1]);

//Access only senior coaches from array
console.log(
    "Only senior coaches: ",
    coaches.filter((coach) => coach.title.includes("Senior")),
);

// Coaches youger then 24
console.log(
    "Only young coaches: ",
    coaches.filter((coach) => {
        return coach.age < 24;
    }),
);

// Find a key
console.log(
    "Find by ID: ",
    coaches.find((coach) => {
        return coach.id === 2;
    }),
);

// Find a key that fails
// Returns undefined
console.log(
    "Find by ID: ",
    coaches.find((coach) => {
        return coach.id === 500;
    }),
);

// Function that searched for a coach by ID. If it exits retun the coach
// Else return error

const findCoach = (id, array) => {
    const coach = array.find((coach) => coach.id === id);
    if (!coach) {
        throw new Error(`Coach with ID of ${id} does not exist`);
    }
    return coach;
};

console.log("findCoach function: ", findCoach(1, coaches));


console.log(
    "Full names:",
    coaches.map((coach) => {
        return `${coach.firstName} ${coach.lastName} is ${coach.age} years old`;
    }),
    );
    
    console.log("findCoach function: ", findCoach(500, coaches));
    