// Object calculator with different properties
// Each properties is a function that return the result
const calculator = {
    addition: (a, b) => {
        return a + b 
    },
    subtract: (a, b) => {
        return a - b 
    },
    divide: (a, b) => {
        return a / b 
    },
    multiply: (a, b) => {
        return a * b 
    },
};

module.exports = calculator;