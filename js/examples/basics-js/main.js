// single line comment

/* multi line comment */

/* Primitive types 

Number 
String 
Boolean 

Object - 
    - Arrays
    - Functions
    - Math
    - Date
    - Regex
    - Number
Null
Undefined

Symbol
BigInt


*/

// console.log("hello world");

// var a = 5;
// a = "hi";
// a = true;
// // a = {};

// console.log("typeof a is", typeof a);

// let b = 6;
// const c = 7;
// // c = 8;

// console.log("a, b, c", a, b, c);

/* Number Type 
 2, 3.4, -5, -0.3443, Infinity, -Infinity, NaN
*/

console.log(typeof 2);
console.log(typeof 3.4);
console.log(typeof Infinity);
console.log(typeof NaN);

console.log("2+2 = ", 2 + 2);
console.log("3-2 = ", 3 - 2);
console.log("4 * 2 = ", 4 * 2);
console.log("6 / 2 = ", 6 / 2);
console.log("7 % 2 = ", 7 % 2);
console.log("2 ** 3 = ", 2 ** 3);

console.log("2 / 0 = ", 2 / 0);
console.log("2 / -0 = ", 2 / -0);

console.log(" 0 / 0 = ", 0 / 0);
console.log(' 0 / "a" = ', 0 / "a");
console.log(" 2 / 'a' = ", 2 * "a");
console.log('2 + "2" ', 2 + parseInt("2"), typeof (2 + parseInt("2")));
console.log('2 + "2.4" ', 2 + parseInt("2.4"), typeof (2 + parseInt("2.4")));
console.log(
  '2 + "2.4" ',
  2 + parseFloat("2.4"),
  typeof (2 + parseFloat("2.4"))
);

console.log(parseInt("2.2343"));
console.log(parseFloat("3.142"));
console.log(parseInt(3.142));
console.log(parseFloat(100), typeof parseFloat(100));

console.log("Number.MAX_SAFE_INTEGER : ", Number.MAX_SAFE_INTEGER);

console.log("bigInt type", 234n, typeof 234n);

console.log("Pi val: ", Math.PI);
console.log(Math.round(34.6343));
console.log(Math.round(34.343));
console.log(Math.ceil(34.234));
console.log(Math.floor(5.95));

console.log(Number.isNaN("abc"));
console.log(Number.isNaN(NaN));
console.log((1234.2343).toPrecision(6));
console.log((1234.2343).toFixed(3));
/* 
// BODMAS rule - order of operations
  (2 + 3) **  2 /  3 +  23 -  23; 
 
// 2+3
// 5 ** 2
// 25 / 3
// 8.333
// 8.333 + 23 = 31.333
// 31.333 - 23 = 8.333
 */
// window.alert(" 0 / 'a' = ", 2 * 'a')  // works only in browser environment
