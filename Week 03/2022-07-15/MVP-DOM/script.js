const checkIfAllowedInPubOriginal = (age, country, drunkeness) => {
    if (
        (age >= 18 && drunkeness <= 3 && country !== "USA") ||
        (age >= 21 && drunkeness <= 3)
    ) {
        return "Come in and enjoy";
    } else {
        return "You are not allowed in";
    }
};

const checkIfAllowedInPub = (age, country, drunkeness) => {
    if (age >= 18 && drunkeness <= 3 && country !== "USA") {
        return `You are ${age} and from ${country} and are this drunk ${drunkeness}. Please come in.`;
    }

    if (age >= 21 && drunkeness <= 3) {
        return `You are ${age} and are this drunk ${drunkeness}. As you are over 21 you can come in.`;
    }
    if (age < 0) {
        return "How can you be a negative age?";
    }
    if (age < 18) {
        return `You are too young ${age}. You are not allowed in`;
    } else {
        return "You are not allowed in";
    }
};

const age = document.getElementById("age").value;
const drunkeness = document.getElementById("drunk").value;
const country = document.getElementById("country").value;

// Prevent default
const inputValue = document.getElementById("btn");
// event.preventDefault();

inputValue.addEventListener("click", () => {
    const age = document.getElementById("age").value;
    const drunkeness = document.getElementById("drunk").value;
    const country = document.getElementById("country").value;

    console.log("Age is: " + age);
    console.log("Country is: " + country);
    console.log("drunk is: " + drunkeness);

    if (age == "" || age == undefined) {
        alert("Please select a valid age");
    }

    if (country == "" || country == undefined) {
        alert("Please select a valid country");
    }

    if (country == "" || drunkeness == undefined) {
        alert("Please enter a valid drunkeness");
    }

    if (
        age != undefined &&
        age != "" &&
        country != undefined &&
        country != "" &&
        drunkeness != undefined &&
        drunkeness != ""
    ) {
        alert(checkIfAllowedInPub(age, country, drunkeness));
    }
});
