const capitalize = (string) => {
    // Capitalize the first letter
    // Add the rest of the word
    return string[0].toUpperCase() + string.slice(1,)
}

module.exports = capitalize;