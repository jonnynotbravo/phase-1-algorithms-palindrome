function isPalindrome(word) {
  // Write your algorithm here

  let arr = word.split('').reverse().join('');

  return arr === word;
}

/* 
  Add your pseudocode here
  - make each letter an array
  - reverse the array
  - convert the array to a string

  if the converted string is equal to the argument
  : return true;
  else: return false;
*/

/*
  Add written explanation of your solution here
    - make each letter an array
    - reverse the array
    - convert the array to a string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
