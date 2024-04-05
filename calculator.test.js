const calculator = require('./calculator');

test('return 2+3 = 5', () => {
    expect(calculator.addition(2, 3)).toBe(5)
})

test('return 2-3 = -1', () => {
    expect(calculator.subtract(2, 3)).toBe(-1)
})

test('return 2/3 = 2/3', () => {
    expect(calculator.divide(2, 3)).toBe(2/3)
})

test('return 2*3 = 6', () => {
    expect(calculator.multiply(2, 3)).toBe(6)
})
