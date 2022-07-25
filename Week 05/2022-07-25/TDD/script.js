export const sum = (...args) => {
    // console.log(args);

    const invalidParamType = new Error("Please enter a number");

    if (args.length <= 0) {
        return 0;
    }

    if (args.some((element) => typeof element !== "number")) {
        throw invalidParamType;
    }

    return args.reduce((acc, current) => (acc += current));
};
