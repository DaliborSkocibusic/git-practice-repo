// console.log("DOM");

// How do you access from the DOM

// Grab element from DOM
// Select by ID

const taskInput = document.getElementById("taskInput");
// console.log(taskInput);

const containers = document.getElementsByClassName("containers");
// console.log(containers);

// Selecting elements by tag name
const divs = document.getElementsByTagName("div");
// console.log(divs);

// Selecting elements by query string - Elements inside CSS
const firstContainer = document.querySelector(".container");
// console.log(firstContainer);

// This is a nodelist of elements not an array
const allContainers = document.querySelectorAll(".container");
// console.log(allContainers);

const heading = document.querySelector("h2");
// console.log(heading);

const test = document.querySelectorAll(".container, .button");
// console.log(test);

const test2 = document.querySelectorAll(".div > p");
// console.log(test2);

const styleBtn = document.getElementById("styleButton");
// console.log(styleBtn);

//HTML collection - array like object
const body = document.getElementsByClassName("body");
// console.log(body);

// console.log(body[0]);
// console.log(body[0].classList);

// console.log(allContainers[0].classList);

const body2 = document.querySelector("body");
// console.log(body2.classList);

const buttons = document.getElementsByClassName("button");
// console.log(buttons);

const containers2 = document.querySelectorAll(".container");

styleBtn.addEventListener("click", () => {
    body2.classList.toggle("body--nightMode");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("button--nightMode");
    }

    containers2.forEach((container) =>
        container.classList.toggle("container--nightMode"),
    );

    heading.classList.toggle("heading--nightMode");
});

const addButton = document.getElementById("addButton");
console.log(addButton);

const appendTextElement = (elementType, textString, parentElement) => {
    // Create a new HTML element
    const elementD = document.createElement("div");
    const element = document.createElement(elementType);

    // Create a text node
    const text = document.createElement(textString);
    console.log("Test is: " + text);

    // Attach text node to the element created
    // Text node will be the child attachet to the element
    element.appendChild(text);
    console.log("Elmeent is: " + element);

    // Attach the full HTML element to a parent on the page
    // i.e. add to exising elelment on the HTML page
    parentElement.appendChild(element);
    console.log("Parent is is: " + parentElement);
};

addButton.addEventListener("click", () => {
    const inputValue = document.getElementById("taskInput").value;
    console.log(inputValue);

    // Add feedback when user clicks with empty input
    if (inputValue === "") {
        return alert("Please enter a task");
    }

    const parentDiv = document.querySelector("#tasks");
    console.log(parentDiv);
    appendTextElement("p", inputValue, parentDiv);

    document.querySelector("#taskInput").value = "";

    const nothingPara = document.getElementById("nothingPara");
    console.log(nothingPara);

    if (nothingPara) {
        parentDiv.remove(nothingPara);
    }

});
