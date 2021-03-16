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

 /*
Create a result array
Iterate over the array
Push the current * current into the result array

Return result array sorted
*/
var sortedSquares = function(nums) {
  let temp = [];
  nums.forEach((el) => {
    temp.push(el * el);
  })
  return temp.sort((a, b) => a-b);
};

/*
Create a result string
Create a temp object
Iterate over the array
Iterate over the inside array
Grab the corresponsing index from current loop that results give us
If its undefined in the temp object
Set it to 1
Else
increment it

Iterate over the object
Find the largest value
And return that key associated with it
*/

function tournamentWinner(competitions, results) {
	let res = '';
	let temp = {};
	let num = 0;
	competitions.forEach((el) => {
		let stringOne = el[0];
		let stringTwo = el[1];
			if (results[num] === 0) {
				if (temp[stringTwo] === undefined) {
					temp[stringTwo] = 1;
				} else {
					temp[stringTwo]++;
				}
			} else if (results[num] === 1){
				if (temp[stringOne] === undefined) {
					temp[stringOne] = 1;
				} else {
					temp[stringOne]++;
				}
			}
		num++;
	})
	let max = Math.max(...Object.values(temp));
	for (var key in temp) {
		if (temp[key] === max) {
			return key;
		}
	}
	return '';
};

/*
Find closest value in a BST
*/
function findClosestValueInBst(tree, target) {
  let res = tree.value;
	let closest = tree.value;
	let seperate = (node) => {
		let val = Math.abs(node.value - target);
		if (closest === node.value) {
			return closest;
		}
		if (val < res) {
			res = val;
			closest = node.value;
		}
		if (node.left !== null) {
			seperate(node.left);
			if (node.right !== null) {
				seperate(node.right);
			}
		} else {
			if (node.right !== null) {
				seperate(node.right);
				if (node.left !== null) {
					seperate(node.left);
				}
			}
		}
	}
(target < tree.value) ? seperate(tree.left) : seperate(tree.right);
	return closest;
};
/*
Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from left to right branch sum;
*/
function branchSumsAdd(tree, array, sumUp) {
	if (tree === null) {
		return;
	}
	sumUp += tree.value;
	if (tree.left === null && tree.right === null) {
		array.push(sumUp);
		return;
	} else {
		branchSumsAdd(tree.left, array, sumUp);
		branchSumsAdd(tree.right, array, sumUp);
	}
	return array;
}
function branchSums(root) {
	let returnArr = [];
	branchSumsAdd(root, returnArr, 0);
	return returnArr;
}
/*
Node Depths
Write a function that takes in a binary Tree and returns the sum of the nodes depths
*/
function nodeDepths(root) {
  let depth = 0;
	let arr = [];
	nodeDepthsHelper(root,depth,arr);
	arr.forEach((el) => {
		depth += el;
	});
	return depth;
}
function nodeDepthsHelper(tree,sum,arr) {
	if (tree === null) {
		return;
	}
	if (sum !== 0) {
		arr.push(sum);
	}
	if (tree.left === null && tree.right === null) {
		return;
	}
	nodeDepthsHelper(tree.left, sum + 1, arr);
	nodeDepthsHelper(tree.right, sum + 1, arr);
return arr;
}

/*
Implement Depth First Search method on the Node Class which takes an empty array, traverses teh tree using the Depth First Search approach , stores all the nodes names in the input array and returns it
*/
depthFirstSearch(array) {
  let depthFirstHelper = (arr) => {
    if (arr === null) return;
    array.push(arr.name);
    if (arr.children.length === 0) return;
    arr.children.forEach((el) => {
    depthFirstHelper(el);
    });
  }
  depthFirstHelper(this);
  return array;
}
/*

    Each student in the back row must be strictly taller than the student
    directly in front of them in the front row.

  You're given two input arrays: one containing the heights of all the students
  with red shirts and another one containing the heights of all the students
  with blue shirts. These arrays will always have the same length, and each
  height will be a positive integer. Write a function that returns whether or
  not a class photo that follows the stated guidelines can be taken.
*/
function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights = redShirtHeights.sort((a,b) => a-b);
  blueShirtHeights = blueShirtHeights.sort((a,b) => a-b);
	let red = redShirtHeights[0];
	let blue = blueShirtHeights[0];
	if (red === blue) {
			blue = blueShirtHeights[1];
	}
	for (var i = 0; i < redShirtHeights.length; i++) {
		let cur = redShirtHeights[i];
		let sec = blueShirtHeights[i];
		if (red > blue) {
			if (cur <= sec) {
				return false;
			}
		} else {
			if (cur >= sec) {
				return false;
			}
		}
	}
	return true;
}