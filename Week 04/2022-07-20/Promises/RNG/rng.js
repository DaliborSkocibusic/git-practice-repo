const waitForRandomNumber = (max, min) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * max) + min; // + 1 is minimum
            if (randomNumber <= 2) {
                reject(new Error("Number is too small"));
            }
            resolve(randomNumber);
        }, 2000);
    });
};

const errorHandler = (error) => {
    console.log(error);
    document.getElementById("errorText").innerHTML = "Ooops, error";
};

const updateHeading = (number) => {
    document.querySelector("h2").innerText = number;
};

document.getElementById("myButton").addEventListener("click", (e) => {
    console.log(e);
    // waitForRandomNumber(1, 10).then((number) => updateHeading(number));
    waitForRandomNumber(10, 1)
        .then(updateHeading)
        .catch(errorHandler);
});
