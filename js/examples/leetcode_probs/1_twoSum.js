/* 
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

/* psuedocode
- Problem: Two Sum
- Input: nums = [2,7,11,15], target = 9
0. starting index = 0, second elem index = startig index + 1, get len of array 
1. get first element from given array from index 0 
2. get second element from given array from index 1
3. sum first and second element
4  check the sum is equal to given target
5. if sum equal to target return array of indexs of first element and second element
6. else repeat from step 0 with second elm index + 1

*/

function twoSumOptimized(nums, target) {
  // Input: nums = [2,7,11,15],  9
  // Input: nums = [3, 2, 4] , target =6
  const lenOfNums = nums.length;
  const temp = {
    // name:value,
    // key:value,
    // 3: 0,
    // 2: 1,
    // name:'kumar'
  };
  
  for (let i = 0; i < lenOfNums; i++) {
    const elem = nums[i];
    // let diff = target - nums[i]; // 6 -3 = 3
    // let diff = target - nums[i]; // 6 -2 = 4
    let diff = target - elem; // 6 -4 = 2
    if (temp[diff] >= 0) {
      return [temp[diff], i]; // [ 1,2]
    } else {
      temp[elem] = i;
    }
  }
  return result;
}

function twoSum(nums, target) {
  const lenOfNums = nums.length;
  for (let i = 0; i < lenOfNums; i++) {
    for (let j = i + 1; j < lenOfNums; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return result;
}

// function twoSum(nums, target) {
//   // try with for loop
//   const lenOfNums = nums.length;
//   // let result = [];
//   for (let i = 0; i < lenOfNums; i++) {
//     console.log("outer for loop", i);
//     for (let j = i + 1; j < lenOfNums; j++) {
//       let el1 = nums[i];
//       let el2 = nums[j];
//       console.log("twosum: inner for loop => : ", {
//         j,
//         el1,
//         el2,
//         sum: el1 + el2,
//         target,
//       });
//       if (el1 + el2 === target) {
//         console.log("twosum: is true => : ", [i, j]);
//         return [i, j];
//         // result.push(i, j);
//       }
//     }
//   }
//   return result;
// }

// function twoSum(nums, target) { // using if and else
//   // nums: array of number, target:number

//   var startingIndex = 0;
//   var secElemIndex = startingIndex + 1;
//   var elem1 = nums[startingIndex];
//   var elem2 = nums[secElemIndex];
//   var sum = elem1 + elem2;
//   var isEqual = sum === target; // data type: boolean

//   if (isEqual) {
//     console.log("isEqual", [startingIndex, secElemIndex]);
//     return [startingIndex, secElemIndex];
//   } else {
//     secElemIndex += 1;

//     var elem1 = nums[startingIndex];
//     var elem2 = nums[secElemIndex];
//     var sum = elem1 + elem2;
//     var isEqual = sum === target; // data type: boolean

//     if (isEqual) {
//       console.log("isEqual", [startingIndex, secElemIndex]);
//       return [startingIndex, secElemIndex];
//     } else {
//       secElemIndex += 1;
//       // return [];
//     }

//     // return [];
//   }
// }

var numArray = [2, 7, 11, 15];
var target = 9;
// var result = twoSum(numArray, target);
// var result = twoSum([3, 2, 4], 6);
// var result = twoSum([3,3], 6);
// var result = twoSum(numArray, 13);
var result = twoSum([100, 200, 300, 7, 8, 3, 3, 5, 4], 15);
console.log("result: ", result);

// const twoSum = (nums, target) => {
//   let result = [];
//   for (i in nums) {
//     for (j of nums) {
//       if (nums[j] + nums[j + 1] === target) {
//         result.push(j);
//       }
//       j++;
//     }
//     i++;
//   }
//   return result;
// };

// console.log(twoSum([2, 7, 11, 15], 9));
