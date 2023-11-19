/**
 * capitalize function takes a word as input and capitalizes the first letter of each word in the string.
 * It splits the input into an array of words, capitalizes the first letter of each word, and then rejoins the words.
 * @param {string} word - The input word or phrase to be capitalized.
 * @returns {string} - The word or phrase with the first letter of each word capitalized.
 */
export const capitalize = (word) => {
    // Split the input into an array of words
    const words = word.split(' ');
  
    // Variable to store the capitalized word
    let capitalWord = '';
  
    // Loop through each word, capitalize the first letter, and concatenate to the result
    words.forEach(item => {
      item = item[0].toUpperCase() + item.slice(1) + ' ';
      capitalWord += item;
    });

  
    // Return the capitalized word or phrase
    return capitalWord.trim();
  };
  