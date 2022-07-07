/* 
Function in Javascript are Firstclass citizen, 
means you can use function like variable , pass functions to function as arguments
--- 
Function types:

1. function declaration
2. function expresions
3. annonymous function
4. arrow or fat arrow functions
5. IIFE - immediatly invoked function expression

ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

*/
console.log("calling functions.js file start");
// Function declaration

function addTwoNums(n1, n2) {
  //   console.log("sum of n1, n2 =", n1 + n2);
  //   console.log("sum of " + n1 + "," + n2 + " =", n1 + n2);
  // console.log(`sum of ${n1}, ${n2} = `, n1 + n2);
}
// addTwoNums(2, 3);
// addTwoNums(5, 10);

// Function expression

const sumOfTwoNums = function addTwoNums1(a, b) {
  return a + b;
};

// Annoymous function

const sumOfTwoNums1 = function (a, b) {
  return a + b;
};

// arrow / fat arrow function

const sumOfTwoNums2 = (a, b) => {
  return a + b;
};
const sumOfTwoNums3 = (a, b) => a + b;

// IIFE
(() => {
  let a = 4;
  let b = 5;
  // console.log("sum of 4, 5 = ", a + b);
})();

// console.log("calling functions.js file end");

// *******************************************
/* 
Recursive function:
The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems. 
A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion).
ref:https://developer.mozilla.org/en-US/docs/Glossary/Recursion
*/

function addOne(myVar) {
  if (myVar < 10) {
    console.log("myVar", myVar);
    addOne(myVar + 1);
  } else {
    console.log("addone end.....");
  }
}

// addOne(0);

const factorial = (n) => {
  console.log("number: ", n);
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

/* 
n = 3 // 3 * fac(2) => return  3 * 2 => 6
n = 2 // 2 * fac(1) => return  2 * 1 => 2
n = 1 // 1 * fac(0) => return  1 * 1 => 1
n = 0 // return 1
*/
// console.log(factorial(3));

var myArr = [11, 2, 13, 4, 5, 6];

// for (let i = 0; i < myArr.length; i++) {
//   console.log("element-" + i + " : ", myArr[i]);
// }

function myForLoop(arr, counter = 0) {
  const len = arr.length;
  if (counter < len) {
    console.log(`element-${counter} : `, arr[counter]);
    myForLoop(arr, counter + 1);
  }
}

// myForLoop(myArr);

// *******************************************
/* 
Callback function:
A callback function is a function passed into another function as an argument, which is then invoked inside 
the outer function to complete some kind of routine or action.


ref: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
*/

function testCallBack(num, cb) {
  if (num === 3) {
    cb(num);
  } else {
    console.log("number is: ", num);
  }
}

// testCallBack(3, factorial);
// testCallBack(3, (n) => {
//   console.log(n);
// });
