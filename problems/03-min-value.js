/*
Write a function `minValue(nums)` that takes in an array of numbers as an arg.
The function should return the smallest number of the array.

If the array is empty, the function should return `null`.
*/

function minValue(nums){
  for(let i = 0; i <= nums.length; i++){
    let min = Math.min(...nums)
    if(min === Infinity){
      return null;
    }
    return min;
  }
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = minValue;
  } catch (e) {
    module.exports = null;
  }