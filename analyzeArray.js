// Create an object
const analyzeArray = {
    average: (array) => {
        nTotal = analyzeArray.length(array)
        let sum = 0

        // Loop to add all array values
        for (let i = 0; i < nTotal; i+=1) {
            sum += array[i];
        };

        // Divide to get the average
        return sum / nTotal;
    },
    minimum: (array) => {
        // Ponctuation to accept all args
        return Math.min(...array);
    },
    maximum: (array) => {
        return Math.max(...array);
    },
    length: (array) => {
        return array.length;
    }
};
module.exports = analyzeArray;

// console.log(analyzeArray.average([1,8,3,4,2,6]))
// console.log(analyzeArray.minimum([1,8,3,4,2,6]))
// console.log(analyzeArray.maximum([1,8,3,4,2,6]))
// console.log(analyzeArray.length([1,8,3,4,2,6]))
