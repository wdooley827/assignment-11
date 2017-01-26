
/**
 * Ex-01 : sumPositives()
 *
 *  Write a function called sumPositives that takes an array of numbers and
 *  only adds the positive numbers
 *
*/
var sumPositives = function(array){
  var total = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i] > 0){
      total = total + array[i];
    }
  }
  return total;
}



console.assert(sumPositives([3, -1, 4, 5, -3, -4]) === 12);
console.assert(sumPositives([-11, 30,-20, 40, 100]) === 170);
console.assert(sumPositives([4 ,-10,-30, -4, 201]) === 205);
