import { sum } from "./script";

const invalidParamType = new Error("Please enter a number");

describe("Test case for a function that sums numbers", () => {
    it("Should return correct sum when we pass two or more arguments", () => {
        expect(sum(3, 4)).toBe(7);
        expect(sum(1, 1, 1)).toBe(3);
        expect(sum(2, 2, 2, 2, 2, 2)).toBe(12);
    });

    it("Should return input parameter if only one value is entered", () => {
        expect(sum(12)).toBe(12);
        expect(sum(-14)).toBe(-14);
        expect(sum(3.2)).toBe(3.2);
        expect(sum(0)).toBe(0);
    });

    test("Should return 0 if no arguments are provided", () => {
        expect(sum()).toBe(0);
    });

    test("Should throw an error if anything other then a number is provided", () => {
        expect(() => {
            sum("A");
        }).toThrowError(invalidParamType);

        // When testing the entire try catch block is run, wrap it in a function
        expect(() => {
            sum("12", 2);
        }).toThrowError(invalidParamType);

        expect(() => {
            sum("12", "hi", "1");
        }).toThrowError(invalidParamType);

        expect(() => {
            sum("12", [], {});
        }).toThrowError(invalidParamType);
    });
});
