const reverseString = require('./reverseString');

test('korea should be aerok', () => {
    expect(reverseString('korea')).toMatch('aerok')
})
