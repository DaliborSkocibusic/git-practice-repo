const slowAddition = function (num1, num2) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(num1 + num2);
    }, 1500); 
};
}