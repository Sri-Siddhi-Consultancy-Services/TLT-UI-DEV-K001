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

// ==============================================================
/* Number Type 
 2, 3.4, -5, -0.3443, Infinity, -Infinity, NaN
*/

/* console.log(typeof 2);
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
 */
// floating point precision problem
/* let decimal1 = 0.3;
let decimal2 = 0.1 + 0.2;
console.log("decimal1 === decimal2", decimal1, decimal2, decimal1 === decimal2);
console.log(
  "decimal1 === decimal2",
  decimal1.toFixed(3),
  decimal2.toFixed(3),
  decimal1.toFixed(3) === decimal2.toFixed(3)
); */

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

// ==========================================================================
/* 
Big Int



*/

// ===========================================================================
/* 
String Data type
*/

let string1 = "string 1"; // string literals - ''
let string2 = "string 2"; // string literals - ""
let string3 = `string 3`; // template literals
let string4 = new String("string 4"); // using string object

// console.log(
//   "string types: ",
//   typeof string1,
//   typeof string2,
//   typeof string3,
//   typeof string4
// );

var multiLineString = "sdfsf \
ffjlfj f jf \
fj sfj j fsj sfjs \
 j ";

var multiLineString2 = "sdfsf \n\
ffjlfj f jf \n \
fj sfj j fsj sfjs \n\
 j ";

// ECMA 2016
var multiLineString3 = `
str line1
str line2
line 3
 `;

// console.log(multiLineString);
// console.log(multiLineString2);
// console.log(multiLineString3);

var stringEscapeChar = 'this is "important"';
// console.log(stringEscapeChar);

// concate two strigs

// var str1 = "hello";
// var str2 = "   world";
// var helloworld = str1 + str2;
// console.log(str1 + " @ " + str2);
// console.log(1 + 2 + str2);
// console.log(str2 + 1 + 2);
// var num1 = "1";
// var num2 = 2;
// console.log(num1 + num2);

// // check the length of the string
// console.log(helloworld.length);
// // access characters in string
// console.log(str1[3], str1[4]);
// console.log(str1.charAt(0), str1.charAt(3), str1.charAt(4));

// more methods
// console.log(str1.concat(' ', str2));
//  var str1 = 'Cats are the best!';

// console.log("str1.endsWith('best!'):" , str1.endsWith('best!'));

// const sentence = "The quick brown fox jumps over the lazy dog.";
// console.log("is dog word available in sentence: ", sentence.includes("date"));

// const acNumber = 313232323232;
// const acn2 = acNumber.toString()
// const subStr = acn2.substring(8);
// console.log(subStr);
// console.log(subStr.padStart(12, "x"));
// console.log(subStr.padEnd(12, "X"));

// const p =
//   "  The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?   ";

// console.log(p);
// console.log(p.replace("dog", "monkey"));
// console.log(p.replaceAll("dog", "monkey"));
// console.log(p.toLowerCase());
// console.log(p.toUpperCase());
// console.log(p.trim());

// const s1 = 'hello'
// const s2 = 'world'
// const myName = 'kumar'
// const newStr = `${s1} ${s2}, this is ${myName}` // s1 + " " + s2
// console.log("newStr: ", newStr)

/* 
Boolean 

true, false

*/

/* 
equal : variable == variable2, variable === variable2
not :  !
not equal : !=,  !==
greater than : >
less than: <
greater than or equal to : >=
less than or equal to : <=


// null, undefined, false, 0
// comparison check: true , 'hi', [], {}, 2

*/

// let isgreater = 2 > 3
let isgreater = 2 < 3;

let isMonday = true;
let isTomorrowMonday = !isMonday;
let a = 123;
let b = "123";
// let testBool = !a
let testBool = !!a;
let compareStr = a == b;
// console.log(NaN == NaN)
// console.log(Number('123w'))
// console.log("boolean check", isMonday, typeof isMonday);
// console.log("is tomorrow Monday check", isTomorrowMonday, typeof isTomorrowMonday);
// console.log("testBool", testBool, typeof testBool)
// console.log("compareStr is true : ", compareStr, typeof compareStr, b, typeof b)
// console.log("compareStr is true : ", isgreater, typeof isgreater,)

/* 
Null 

*/

let age = null;

/* 
Undefined 

*/

let fname;

// console.log("null and undefined:::", age, fname)

/* 
Object - 
    - Arrays
    - Functions
    - Math
    - Date
    - Regex
    - Number
    - String
   */

/* create a new object */

let myObj = {
  fname: "kumar", // string
  lname: "pedagopu", // string
  isStudent: false, // bool
  age: 32, // number
  skill: ["js", "mysql", "css", "html"],
  fullname: function () {
    return this.fname + " " + this.lname;
  },
};
// console.log("my obj: ", myObj, typeof myObj, myObj.fname);
// console.log("myobj: ", myObj.fname, myObj.lname, myObj.fname +" "+ myObj.lname);
// console.log("myobj: ", myObj.fullname(), myObj.skill[1]);

/* create an array */

// fruits list , mango, apple, banana
const str = "mango, apple, banana";
let name = []; // array , type is object
const fruits = ["mango", "apple", "banana", 12, myObj]; // array

const fruits1 = {
  0: "mango",
  1: "apple",
  2: "banana",
};
// console.log(fruits[0])
// console.log(fruits1[0])
// console.log(fruits1.1)
// console.log(fruits[1], fruits[3])

/*  Making Decissions , if else, switch  

if(condition1){

}else if(condition2){

}else {

}

switch(expression){
  case 1 :
    break
  case 2 :
    break
  default :

}

*/
let myMood = "horlics";
myAge = 44;
const MY_CONST = 5;
// console.log(typeof myMood, myMood);

if (myMood === "coffie") {
  console.log("bring coffie");
} else if (myMood.toLowerCase() === "tea" || myAge === 44) {
  console.log("bring tea");
} else if (myMood === "horlics" || myAge <= 32) {
  console.log("bring horlics");
  // return false
} else if (myAge > 32 && myAge < 62) {
  console.log("bring lemon water");
} else if (myAge > 62) {
  console.log("bring tablets");
} else {
  console.log("bring water");
}
// a = 2;
// if (a > 3) console.log("a is greater than 3");
// else console.log("a is less than 3");

switch (myMood) {
  case "coffie":
    console.log("bring coffie");
    break;
  case "TEA":
    console.log("bring tea");
    break;
  case "horlics":
  case "boost":
    console.log("bring horlics");
  break;
  default:
    console.log("bring water");
}

/* Looping for, while, do while loop



*/
