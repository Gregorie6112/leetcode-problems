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
      for (var j = i + 1; j < nums.length; j++) {
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

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
Create a temp Object
iterate over the nums array
if the current element is not in the array set it to 1

iterate over the tempobject
if the value is = 0
return the key
 */
var singleNumber = function(nums) {
    let result = 0;
    let tempObj = {};
    nums.forEach((el) => {
        if (tempObj[el] === undefined) {
            tempObj[el] = 1;
        } else {
            tempObj[el]++
        }
    })
    for (var key in tempObj) {
        if (tempObj[key] === 1) {
            result = key;
        }
    }
    return result;
};

/*
Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.
*/
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Create a temp object
Iterate over the string
If tempObj[current] === undefined
tempObj[current] = 1

Iterate over the tempObj
If the value is 1 grab the key
Return s.indexOf(key)
 */
var firstUniqChar = function(s) {
    let tempObj = {};
    for (var i = 0; i < s.length; i++) {
      let current = s[i];
      if (tempObj[current] === undefined) {
        tempObj[current] = 1;
      } else {
        tempObj[current]++;
      }
    }
    for (var key in tempObj) {
      if (tempObj[key] === 1) {
        return s.indexOf(key);
      }
    }
  return -1;
};
/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Create a resultArray
Create a tempObj
Iterate over the input array
Set every number in the array = to 1 in the object
If the current index is 0
dont add
Else
Iterate over the tempObject keys and add all numbers
Set the number to current element

Return the resultArray
 */
var runningSum = function(nums) {
    let resultArray = [];
    let tempObj = {};
    let count = 0;
  for (var i = 0; i < nums.length; i++) {
      let current = nums[i];
      tempObj[count] = current;
      count++;
      if (i === 0) {
        resultArray.push(current)
      } else {
        let newNumber = 0;
        Object.values(tempObj).forEach((el) => {
          newNumber += el;
        })
        resultArray.push(newNumber)
      }
  }
  return resultArray;
};
/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Create a result array
Iterate over the nums input
create a count to count how many numbers are less
Create a current var
Create a second iteration
Create a second var
If current < second
Increment the count

Push the count number into the result Array

return resultarray
 */
var smallerNumbersThanCurrent = function(nums) {
    let resultArray = [];
    for (var i = 0; i < nums.length; i++) {
      let count = 0;
      let current = nums[i];
      for (var j = 0; j < nums.length; j++) {
        let second = nums[j];
        if (current > second) {
          count++;
        }
      }
      resultArray.push(count);
    }
    return resultArray;
  };

  /*
Create a result counter to return
Iterate over the array
Create a current element and string the current
Split the current element string
If the split array length is even
Increment the counter

return counter
 */
var findNumbers = function(nums) {
    let counter = 0;
    for (var i = 0; i < nums.length; i++) {
      let current = nums[i].toString().split('');
      if (current.length % 2 === 0) {
        counter++;
      }
    }
    return counter;
  };
  /*
Create a temp object
iterate over the input
If the current element is undefined in tempobject
Set it to 1
else
increment the value

Turn the tempObject values into an array
Grab the largest value in the tempObj array
Find that value in the tempObj
Return it
 */
var majorityElement = function(nums) {
    let temp = {};
    let res = 0;
    nums.forEach((el) => {
      if (temp[el] === undefined) {
        temp[el] = 1;
      } else {
        temp[el]++;
      }
    })
     let newArr = Math.max(...Object.values(temp));
     for (var key in temp) {
       if (temp[key] === newArr) {
         return key;
       }
     }
   };
   /*
Create a temp obj
Create a result number = 0
Iterate over the input array
Set a add var
Set a current var
Set a second var i + 1
If the current number is > second
Set add var = Subtract the current number - second
Else
Set add var = Add the current number + second number

If add var > result number
Set the result number to be add var

if (result number < 0)
return 0
else
Return result number
   */
   var getRange = (num1, num2) => {
    let arr = [];
    for (var i = num1; i < num2; i++) {
      arr.push(i);
    }
    return arr.length;
  }
  var maxProfit = function(prices) {
    let temp = {};
    let result = 0;
    prices.forEach((el, index) => {
      let resultVar = 0;
      for (var i = index + 1; i < prices.length; i++) {
        let second = prices[i];
        if (el > second) {
          resultVar = second - el;
        } else if (second === el) {
          resultVar = 0;
        } else {
          resultVar = getRange(el, second);
        }
       if (resultVar > result) {
        result = resultVar;
       }
      }
    })
    return result;
  };
  /*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.
*/
var findDuplicate = function(nums) {
    let temp = {};
      nums.forEach((el) => {
        if (temp[el] === undefined) {
          temp[el] = 1;
        } else {
          temp[el]++;
        }
      })
    for (var key in temp) {
      if (temp[key] > 1) {
        return key;
      }
    }
      return 0;
  };
  /*
  ALGO EXPERT
  */
 /*
Create a first number count
Iterate over the array input
If current element === firstNumber
Increment firstNumber var

If the firstNumber count === sequence.length
Return true
Else
Return false
*/
function isValidSubsequence(array, sequence) {
  let first = 0;
  array.forEach((el, index) => {
    if (el === sequence[first]) {
      first++;
    }
  });
   if (first === sequence.length) {
     return true;
   } else {
     return false;
   }
 };