
/**
 * Ex-08 : hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as
 *
 *
**/
var hasDoubleLetters = function(str){
  var dblLetters = false;
  var lowerCase = str.toLowerCase();

  for (var i = 0; i < lowerCase.length; i++){
    if (lowerCase[i] === lowerCase[i+1]){
      dblLetters = true;
    }
  }
  return dblLetters;
}
console.log('A' === 'a')

console.assert( hasDoubleLetters('stutter') === true )
console.assert( hasDoubleLetters('prospect') === false )
console.assert( hasDoubleLetters('shoehorn') === false )
console.assert( hasDoubleLetters('Aardvark') === true )
