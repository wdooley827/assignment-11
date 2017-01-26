/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */
function findLongestWord(str){

  var arrayOfWords = str.split(' ');
  var longestWord = "";

  for (var i = 0; i < arrayOfWords.length; i++){
    //takes out the ' from abbreviations to correct counting.
    arrayOfWords[i] = arrayOfWords[i].replace("'" , "");
    // console.log(arrayOfWords[i])
    if (arrayOfWords[i].length > longestWord.length){
    longestWord = arrayOfWords[i];
    }
  }
  return longestWord;
}






console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord('a time to act.') === 'time')
