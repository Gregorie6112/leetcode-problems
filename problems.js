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