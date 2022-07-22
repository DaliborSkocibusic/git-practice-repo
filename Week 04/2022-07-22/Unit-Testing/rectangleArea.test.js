import { rectangleArea } from "./rectangleArea";

// Describe block
// Allows us to group tests together

const incorrectParamTypeError = new Error("Width and height should be numbers");
const notEnoughParams = new Error("Two arguments need to be provided");

describe("Tests for a fn for area of a rectangle", () => {
    // also same as test(). it() === test()
    it("Should calculate the correct area", () => {
        expect(rectangleArea(2, 2)).toBe(4);
        expect(rectangleArea(200, 200)).toBe(40000);
        expect(rectangleArea(1.2, 2.1)).toBe(2.52);
        expect(rectangleArea(1.456, 2.123)).toBe(3.091088);
    });

    test("Should throw an incorrect parameter type error if one of the arguments is not a number", () => {
        expect(() => {
            rectangleArea(undefined, undefined);
        }).toThrowError(incorrectParamTypeError);
    });

    test("Should throw an not enough parameters error if not enough arguments are provided", () => {
        expect(() => {
            rectangleArea(12);
        }).toThrowError(notEnoughParams);
    });
});

// // CORRECT FORMATTING

//     test("Should throw an incorrect parameter type error if one of the arguments is not a number", () => {
//         expect(() => {
//             rectangleArea(undefined, undefined);
//         }).toThrowError(incorrectParamTypeError);
//     });
