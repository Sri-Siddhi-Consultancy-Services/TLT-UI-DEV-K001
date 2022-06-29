/* Ref:
https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
https://www.freecodecamp.org/news/javascript-execution-context-and-hoisting/    
https://www.javatpoint.com/javascript-execution-
https://www.youtube.com/watch?v=Nt-qa_LlUH0
https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth
https://zerotomastery.io/cheatsheets/javascript-cheatsheet-the-advanced-concepts/#JavaScriptEngine

*/

/* 
Lexical Environment:
A Lexical Environment determines how and where we write our code
*/

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

/* 
Scope:
The current context of execution. The context in which values and expressions are "visible" or can be referenced. 
If a variable or other expression is not "in the current scope," then it is unavailable for use. 
Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

*/

/* 
Hoisting:
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of 
functions, variables or classes to the top of their scope, prior to execution of the code.

Hoisting allows functions to be safely used in code before they are declared.

Variable and class declarations are also hoisted, so they too can be referenced before they are declared. 
Note that doing so can lead to unexpected errors, and is not generally recommended.

*/
// var greet = undefined;
// var a = undefined;
var greet = "hello";

var a = function () {
  console.log("func a is calling");
};

function b() {
  console.log("func b is calling", "" + greet2 + greet);
}

var greet2 = "hi";

a();
b();
