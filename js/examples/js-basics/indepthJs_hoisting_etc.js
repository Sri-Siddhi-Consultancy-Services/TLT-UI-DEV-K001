/* Ref:
https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
https://www.freecodecamp.org/news/javascript-execution-context-and-hoisting/    
https://www.javatpoint.com/javascript-execution-
https://www.youtube.com/watch?v=Nt-qa_LlUH0
https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth
https://dev.to/narottam04/how-javascript-works-visually-explained-269j
https://zerotomastery.io/cheatsheets/javascript-cheatsheet-the-advanced-concepts/#JavaScriptEngine

*/
// ***************************************************************************************************************
/* 
Lexical Environment:
A Lexical Environment determines how and where we write our code
*/
// ***************************************************************************************************************
/* 
Execution Context:
Execution context is the concept for describing the internal working of a code. In JavaScript, 
the environment that enables the JavaScript code to get executed is what we call JavaScript Execution Context.
It is the execution context that decides which code section has access to the functions, variables, 
and objects used in the code. During the execution context, the specific code gets parsed line by line then 
the variables and functions are stored in the memory. An execution context is similar to a container 
that stores variables, and the code gets evaluated and then executed. Thus, it is the execution context 
that provides an environment for the specific code to get executed.

The environment that helps the code get executed is called the Execution Context. 
It is the code that's currently running, and everything surrounding that helps to run it

There are two types of execution contexts:
Global Execution Context (GEC)
Function Execution Context (FEC)

And each of the execution contexts has two phases:
Creation Phase
Execution Phase



*/
// *****************************************************************************************************************
/* 
Scope:
The current context of execution. The context in which values and expressions are "visible" or can be referenced. 
If a variable or other expression is not "in the current scope," then it is unavailable for use. 
Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

*/

// ******************************************************************************************************************
/* 
Hoisting:
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of 
functions, variables or classes to the top of their scope, prior to execution of the code.

Hoisting allows functions to be safely used in code before they are declared.

Variable and class declarations are also hoisted, so they too can be referenced before they are declared. 
Note that doing so can lead to unexpected errors, and is not generally recommended.

All declarations (function, var, let, const and class) are hoisted in JavaScript, while the var declarations are initialized with `undefined`, but `let` and `const` declarations remain uninitialized.

They will only get initialized when their lexical binding (assignment) is evaluated during runtime by the JavaScript engine. This means we can’t access the variable before the engine evaluates its value at the place it was declared in the source code. This is what we call Temporal Dead Zone, A time span between variable creation and its initialization where they can’t be accessed.

*/

// *Note: JavaScript only hoists declarations, not initialisation*

// var message;
// console.log(message); // output : undefined
// message = "The variable Has been hoisted";

// function hoist() {
//   a = 20;
//   var b = 100;
// }

// hoist();

// console.log(a); // Accessible as a global variable outside hoist() function  Output: 20

// All declarations (function, var, let, const and class) are hoisted in JavaScript, while the var declarations are initialized with `undefined`, but `let` and `const` declarations remain uninitialized.

// console.log(a); // Output: ReferenceError: a is not defined
// let a = 3;

// let name1 = "sai";
// function a() {
//   // name1 = undefined
//   // name2
//   console.log("calling function a", fname);
//   if (true) {
//     let name1 = "raja";
//     var name2 = "sekhar";
//     console.log("name1", name1);
//   }

//   console.log("name2", name2);
//   console.log("name1", name1);
// }
// var fname = "sai123"; // var is global or functional scope

// function b() {
//   console.log("calling function b");
// }

// a();
// b()

// **************************************************************************************************************
/* 
Difference between var, let and const

Variables declared using the `var` keyword are scoped to the function in which they are created, 
or if created outside of any function, to the global object. `let` and `const` are block scoped, 
meaning they are only accessible within the nearest set of curly braces (`function, if-else block, or for-loop`)

1. `var` allows variables to be hoisted, meaning they can be referenced in code before they are declared.
`let` and `const` will not allow this, instead throwing an error.

2. Redeclaring a variable with `var` will not `throw an error`, but `'let' and 'const'` will.
3. `let` and `const` differ in that `let` allows reassigning the variable's value while `const` does not
*/

// Scope example (global, function, block)
var fname = "raj"; // global  scope
// let lname = "a";
function hello() {
  var fname = "sai"; // function  scope
  var fname = "laxmi"; // var  allow re-declaration
  let lname = "b";
  //   let lname = "d"; // let won't allow re-declaration
  console.log("1=====", fname);

  if (true) {
    var fname = "kumar"; // block scope
    let lname = "c";
    // let lname = "e";
    console.log("2=====", fname);
  }

  console.log("3=====", fname, lname);
}
// hello();
// console.log("4last=====", fname, lname);

// Hoisting example

function abc() {
  var a = 5;
  let b = 6;
  console.log(a, b, c, d, e);
}
// abc();
var c = 10; // allow hoisting
let d = 15; // not allow hosting
const e = 20; // not allow hosting

// Redclaring example
var a = 10;
var a = 15; // var  allow re-declaration

let b = 5;
// let b = 6; // let will allow re-declaration

// const re-assignment
// let allow re-assignemnt but const will not allow re-assignment
let abcd = "hi";
abcd = "hello";

const def = "hi";
// def = "hello";
const myObj = {
  name: "raja",
  age: 32,
};
// myObj = { model: "tata" }; // will throw error
console.log(myObj);
myObj.name = "sekhar"; //  will not throw error
console.log(myObj);

// ************************************************************************************************************
/* 
closures in JavaScript

 A closure is the combination of a function and the lexical environment within which that function was declared. 
 i.e, It is an inner function that has access to the outer or enclosing function’s variables. 
 The closure has three scope chains

    * Own scope where variables defined between its curly brackets
    * Outer function’s variables
    * Global variables
    * 
ref: 
1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
2. https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44
    
*/
const myglobalConst = 10;

function addToNumber(base) {
  const add2 = 2;
  return function addBaseNumber(value) {
    const add3 = 3;
    return base + value + add2 + add3 + myglobalConst;
  };
}

const add10Func = addToNumber(10);
const add20Func = addToNumber(20);
const add30Func = addToNumber(30);

const myNumber = add10Func(5); // 15 + 15 = 30
const myNumber25 = add20Func(5); // 25 + 15 = 40

console.log("mynumber ", myNumber);
console.log("myNumber25 ", myNumber25);

function sumNums(a) {
  // function currying
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const sumofthree = sumNums(10)(20)(30); // 60
console.log("sumNums ", sumofthree);

var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },

    decrement: function () {
      changeBy(-1);
    },

    value: function () {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment(); // 1
counter.increment(); // 2
console.log(counter.value()); // 2.

counter.decrement(); // -1, 1
console.log(counter.value()); // 1.
