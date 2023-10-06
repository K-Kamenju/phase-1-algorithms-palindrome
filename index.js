function isPalindrome(word) {
  // Write your algorithm here 
  const originalString = word.split('');
  const reversedString = originalString.reverse()
  const reJoinedString = reversedString.join('')
  console.log(reJoinedString)

  //the if condition
  if(word === reJoinedString) {
    return true
  } else {
    return false
  }
}



// isPalindrome("kamenju") // this is used to test whether the code is working till the console.log point





/* 
  Add your pseudocode here

function isPalindrome(word) {
  if(word === word.reversed()) {
    return true
  } else {
    return false
  }
}

using the inbuilt js methods i.e, split, reverse and join

const splitString = word.split(" ") //NOte: the split function needs to have an empty string as the arguement
const reversedString = splitString.reverse()
const reJoinedString = reversedString.join(" ")



*/



/*
  Add written explanation of your solution here

To check is a word is a palindorome we have to reverse the order of letter and check if they are equal

This is why we use the split, reverse and join methods


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
