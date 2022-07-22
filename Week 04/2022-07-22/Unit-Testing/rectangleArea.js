export const rectangleArea = (length, width) => {
    if (typeof length !== "number" || typeof width !== "number") {
        throw new Error("Width and height should be numbers");
    }

    if (length <= 0 || width <= 0) {
        throw new Error("Width and Height must be positive number");
    }

    if (length === undefined || width === undefined) {
        throw new Error("Width and Height must be a number");
    }

    return length * width;
};
