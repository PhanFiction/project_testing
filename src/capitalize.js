function capitalize(word) {
  // "hello"
  // take first letter and capitalize it
  // take the rest of the letters after the first and append it back to the first letter
  let firstLetter = word[0].toUpperCase();
  let toArr = word.split('');
  let otherHalf = toArr.slice(1);
  let newWord = firstLetter + otherHalf.join('');

  return newWord;
}

capitalize('home');

module.exports = capitalize;