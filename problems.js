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
/*
Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them
*/
var distributeCandies = function(candyType) {
    let ableToEat = candyType.length / 2;
    var newObject = {};
    for(var i = 0; i < candyType.length; i++) {
        if (newObject[candyType[i]] === undefined) {
            newObject[candyType[i]] = 1;
        } else {
            newObject[candyType[i]]++;
        }
    }
    if (Object.keys(newObject).length > ableToEat) {
        return ableToEat;
    } else {
        return Object.keys(newObject).length;
    }
};

/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

 Sort the array
 Set a current number = 0
 Set an increment number = 0
 while current number = 0
 If sortedarray.indexOf(incrementnumber) === -1
 Set the current number = increment number
 Else
 Increment the increment number
 Return current number
 */
var missingNumber = function(nums) {
    let sortedArray = nums.sort();
    let returnNumber = 0;
    let incrementNumber = 0;

    while(returnNumber === 0) {
        if (sortedArray.indexOf(incrementNumber) === -1) {
            return incrementNumber;
        } else {
            incrementNumber++;
        }
    }
};
/*
Remove duplicates from an array
*/
var removeDuplicates = function(nums) {
    let tempObj = {};
    var length = nums.length;
    for (var i = 0; i < length; i++) {
        let currentElement = nums[i];
        if (tempObj[currentElement] === undefined) {
            tempObj[currentElement] = 1
        }
    }
    return Object.keys(tempObj);
};

/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

while k > 0
set a var = pop the last number off the nums array
add it to the front of nums array
decrement k
 */
var rotate = function(nums, k) {
    while(k > 0) {
        let number = nums.pop();
        nums.unshift(number);
        k--;
    }
    return nums;
};
/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
Set a tempObject
iterate over nums array
if the tempObject[array[i]] === undefined
Set it to 1 in the tempobject
Else
return true
return false
*/
var containsDuplicate = function(nums) {
    let tempObj = {};
    for (var i = 0; i < nums.length; i++) {
        if (tempObj[nums[i]] === undefined) {
            tempObj[nums[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
};