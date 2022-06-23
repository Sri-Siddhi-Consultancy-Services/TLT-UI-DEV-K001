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
6. else repeat from step 1 with second elm index + 1

*/

function twoSum(nums, target) {
  // nums: array of number, target:number

  var startingIndex = 0;
  var secElemIndex = startingIndex + 1;
  var elem1 = nums[startingIndex];
  var elem2 = nums[secElemIndex];
  var sum = elem1 + elem2;
  var isEqual = sum === target; // data type: boolean

  if (isEqual) {
    console.log("isEqual", [startingIndex, secElemIndex]);
    return [startingIndex, secElemIndex];
  } else {
    secElemIndex += 1;

    var elem1 = nums[startingIndex];
    var elem2 = nums[secElemIndex];
    var sum = elem1 + elem2;
    var isEqual = sum === target; // data type: boolean

    if (isEqual) {
      console.log("isEqual", [startingIndex, secElemIndex]);
      return [startingIndex, secElemIndex];
    } else {
      secElemIndex += 1;
      // return [];
    }

    // return [];
  }
}

var numArray = [2, 7, 11, 15];
var target = 9;
// var result = twoSum(numArray, target);
// var result = twoSum([3, 2, 4], 6);
// var result = twoSum([3,3], 6);
// var result = twoSum(numArray, 13);
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
