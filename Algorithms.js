//-----Check for Palindromes-----

function palindrome(str) {
  // Good luck!
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var newStr = str.split("").reverse().join("");
  
    if (newStr == str){
      return true;
    } return false;
  }

palindrome("A man, a plan, a canal. Panama");

//-----Factorialize a numer -----


function factorialize(num) {
  var newNum = 1;
    for (i=1; i<=num;i++){
        newNum = newNum * i;
    }
  return newNum;
}

factorialize(5);


