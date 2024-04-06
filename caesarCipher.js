const caesarCipher = (string, value = 5) => {

    // Define alphabet of start
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    // Convert string to array
    let array = string.split('');

    // Define the value of key
    const key = value;

    // Loop over all the el of the array
    for (let i = 0; i < string.length; i+= 1) {

        // add the key value after the method to get the next value
        let index = alphabet.indexOf(array[i]) + key;

        // Change the value of the array with the new one
        array[i] = alphabet[index];

    }
    // Return result converted
    return String(array.join(''));
}

module.exports = caesarCipher;

// console.log(caesarCipher('marcus'));

// Decide of the key
    // Normal is 3

// Create 2 list OR Dict
    // normal alphabet
    // cipher alphabet

// Split the string
// Modify the letters
// Join and return