/*

 I: Array of numbers and target number
 O: Array of 2 numbers that add up to that number

 Create a array for results
 Iterate over nums array
 Set a variable for current element
 Iterate over again
 if first element and second element is === target
 push indexs of both elements into result array
 return

 */

var twoSum = function(nums, target) {
  var results = [];
  for (var i = 0; i < nums.length; i++) {
      let currentNumber = nums[i];
      for (var j = i; j < nums.length; j++) {
          let secondNumber = nums[j];
          if (currentNumber + secondNumber === target) {
              results.push(i, j);
              return results;
          }
      }
  }
  return 'no matches';
};

/*

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 Create a result boolean set to false
 String the input and split it and reverse it
 Join the reversed string and turn it into a number
 Compare the reversed string to input string
 If the reversed string is === input
 Return true
 else
 Return false
*/

var isPalindrome = function(x) {
  let isTrue = false;
  let reversedInput = x.toString().split('').reverse();
  let joinedString = Number(reversedInput.join(''));
  if (joinedString === x) {
      isTrue = true
      return isTrue;
  } else {
      return isTrue;
  }
};

/*

 I: Array of string
 O: String of Letters
 E: If no common prefix return an empty string

 Create a result string
 Create a var set to the first element to compare against
 Iterate over the input array starting at index 1
 Create a temp var to change result string
 Set a var for current element
 Iterate over the current element
 If current element === firstelement[j]
 Add letter to temp var

 Return result string
 REDO STILL HAS BUGS

 */
var longestCommonPrefix = function(strs) {
  let resultString = '';
  let firstElement = strs[0];
  for (var i = 1; i < strs.length; i++) {
      let tempVar = '';
      let currentElement = strs[i];
      for (var j = 0; j < currentElement.length; j++) {
          let secondElement = currentElement[j];
          if (secondElement === firstElement[j]) {
              tempVar += secondElement;
          }
      }
      resultString = tempVar;
  }
  return resultString;
};

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
68/91 test cases passed, still errors
 */
var isValid = function(s) {
  let pairs = {
      '(': ')',
      '[': ']',
      '{': '}'
  };
  let resultVar = false;
  for (var i = 0; i < s.length; i++) {
      let currentElement = s[i];
      let nextElement = s[i + 1];
      if (currentElement === '(' || currentElement === '[' || currentElement === '{') {
          if (nextElement === pairs[currentElement]) {
              resultVar = true;
          } else {
          let lastElement = s[s.length - 1 - i];
            if (pairs[currentElement] === lastElement) {
              resultVar = true;
              } else {
              return false;
              }
          }
      }
  }
  return resultVar;
};