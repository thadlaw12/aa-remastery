/*
Write a function `removeLastVowel(word)` that takes in a string and returns the
string with its last vowel removed.
*/

function removeLastVowel(word){
  for(let i = word.length - 1; i > 0; i--){
    let c = word.charAt(i);
    if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'){
      let newWord = word.replace(c, "");
      return newWord;
    }
  } return word;
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = removeLastVowel;
  } catch (e) {
    module.exports = null;
  }