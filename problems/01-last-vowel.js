/*
Write a function `lastVowel(str)` that takes in a string and returns the last
vowel that appears sequentially in the string. Note that the string may contain
capitalization.

Hint: You may find the `String.toLowerCase` or `String.toUpperCase` methods useful.

String.toLowerCase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
String.toUpperCase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
function lastVowel(str){
  for (let i = str.length - 1; i > 0; i--){
    let c = str.charAt(i);
    if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'E' || c == 'A' || c == 'I' || c == 'O' || c == 'U'){
      return c;
    }
  } return null;
}


console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = lastVowel;
  } catch (e) {
    module.exports = null;
  }