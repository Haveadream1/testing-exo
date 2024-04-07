const analyzeArray = require('./analyzeArray');

test('Get average of array to be 4', () => {
    expect(analyzeArray.average([1,8,3,4,2,6])).toBe(4);
})

test('Get minimum of array to be 1', () => {
    expect(analyzeArray.minimum([1,8,3,4,2,6])).toBe(1);
})

test('Get maximum of array to be 8', () => {
    expect(analyzeArray.maximum([1,8,3,4,2,6])).toBe(8);
})

test('Get length of array to be 6', () => {
    expect(analyzeArray.length([1,8,3,4,2,6])).toBe(6);
})