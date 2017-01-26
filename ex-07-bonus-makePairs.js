/** ! Adventure Mode !
 * Ex : makePairs()
 *
 * Write a function called makePairs that takes an array of values and
 * returns an an array of pair-arrays.
 *
 * e.g. makePairs(['hi','hello', 'howdy', 'greetings'])
 *       => [ ['hi', 'hello'] , ['howdy', 'greetings'] ]
 *
*/
function makePairs(arrayOfValues){
  var newArray = []
  for (var i = 0; i < arrayOfValues.length; i++){
    var sliced = arrayOfValues.slice([i],[i+2])
    if (sliced[i++]%2 === 0){
    }
    // console.log(sliced)
    newArray.push(sliced)
    }

  return newArray
}




var pairsOutput = makePairs([10,20,30,40,50,60,70,80])
//=> [ [10,20], [30,40], [50,60], [70,80] ]

var firstPair = pairsOutput[0];
var thirdPair = pairsOutput[2];

console.assert(pairsOutput.length === 4)
console.assert(firstPair.length === 2)
console.assert(firstPair[0] === 10)
console.assert(firstPair[1] === 20)
console.assert(thirdPair[0] === 50)
console.assert(thirdPair[1] === 60)
