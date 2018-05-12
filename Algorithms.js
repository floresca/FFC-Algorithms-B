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


                    //-----Compare the last letter of a string to the taget-----

function confirmEnding(str, target) {

  return str.substr(-target.length) === target;

}
  
confirmEnding("Bastian", "n");


                              //-----duplicate the string x amount of time-----

function repeatStringNumTimes(str, num) {
  // repeat after me
  
  if (num < 0) {
    return "";
  } else {
  return newStr = str.repeat(num);
  }
}

repeatStringNumTimes("abc", 3);

                            //-----Truncate a string where the number says-----


function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }


}

truncateString("A-tisket a-tasket A green and yellow basket", 11);


            //----- Chunk Monkey creating arrays inside arrays using splice-----
            
            function chunkArrayInGroups(arr, size) {
  // Break it up.
  
  var array = [];
  
  for (var i = 0; i < arr.length; i+=size){
    array.push(arr.slice(i, i+size));
  }
  
  return array;
  
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


                      //-----Cut the head of the snake (I felt it was easy)-----
                      
 function slasher(arr, howMany) {

  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);

                      //-----Falsy Bouncer using the filter method to filer out what we dont want-----
                    
function bouncer(arr) {

   var newArr = [];
   
   for(var i = 0; i < arr.length; i++){
     if (Boolean(arr[i]) !== false){
         newArr.push(arr[i]);
         }
   }
  
  return newArr;
}

bouncer([7, "ate", "", false, 9]);


                      //----- Seek and Destroy  -----
                      
function destroyer(arr) {
  
  var cars = Array.prototype.slice.call(arguments);
  
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      if (arr[i] === cars[j]){
        delete arr[i];
      }
    }
  }
 
 
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

                      // ----- Where do I belong? -----
                      
                      
function getIndexToIns(arr, num) {
  
  var newArr = [];
  newArr.push(num);
  
  for(var i = 0; i < arr.length; i++){
    newArr.push(arr[i]);
  }
  
  newArr.sort(function(a, b){
    return a - b;
  });
  
  for(var j = 0; j < newArr.length; j++){
    if(newArr[j] === num){
      return j;
    }
  }

}

getIndexToIns([40, 60], 50);
