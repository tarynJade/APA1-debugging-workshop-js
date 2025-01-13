function capitalise(word) {
  const capitalisedFirstLetter = word[0].toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();
  return capitalisedFirstLetter + restOfWord;
}

module.exports = { capitalise };

// capitalise first letter by using position 0 and toUpperCase()
// Using slice method at position 1 to get the rest of string and ensuring it is set to lower case for any weird edge cases
// return the whole word
