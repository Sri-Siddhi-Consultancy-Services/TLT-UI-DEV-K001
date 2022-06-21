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

*/
console.log("calling functions.js file start");
// Function declaration

function addTwoNums(n1, n2) {
  //   console.log("sum of n1, n2 =", n1 + n2);
  //   console.log("sum of " + n1 + "," + n2 + " =", n1 + n2);
  console.log(`sum of ${n1}, ${n2} = `, n1 + n2);
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
  console.log("sum of 4, 5 = ", a + b);
})();

console.log("calling functions.js file end");
