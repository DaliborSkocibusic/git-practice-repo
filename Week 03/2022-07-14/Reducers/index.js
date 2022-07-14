// reduce iterator

const scores = [20, 40, 50, 60, 70, 80];
const initialValue = 0;

const total = (scoreArr:) => {
    // using a reducer
    // acc is the result of the previous callback op
    const total = scoreArr.reduce((acc, current) => {
        // add each number to acc
        return (acc += current);
    }, initialValue);

    return total;
};

console.log(total(scores));