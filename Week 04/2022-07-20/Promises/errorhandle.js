function greet(name) {
    try {
        if (typeof name !== "string") throw new Error("name must be a string");
        return "Hello " + name;
    } catch (error) {
        console.error("Error is " + error.message);
    } finally {
        console.log("Will always be called");
    }
}
console.log(greet("David"));

console.log(greet(12));
