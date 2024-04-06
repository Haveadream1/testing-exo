const caesarCipher = require('./caesarCipher');

test('marcus to be rfwhzx with a key of 5', () => {
    
    expect(caesarCipher('marcus', 5)).toBe('rfwhzx')
})