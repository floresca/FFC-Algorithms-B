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


                         //-----Capitalize every first letter in a sentence-----

function titleCase(str) {
  var newStr = str.toLowerCase().split(" ");
  
  for(var i = 0 ; i < (newStr.length)  ; i++){
    newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substr(1);
  }
  return newStr.join(" ");
} 

titleCase("I'm a little tea pot");


                              //-----Find largest numbers in several arrays-----
                              
function largestOfFour(arr) {
  var newArr = [];
  
  for (var i = 0; i < arr.length; i++){
      newArr.push(Math.max(...arr[i]));
  }
  
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);




