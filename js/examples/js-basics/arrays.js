/* 
javascript Array:

built in methods

forEach, map, reduce, findIndex, find, 

ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

/* 
Create an array
=============================================================
*/

const myNewArr = [];
const mysecondArray = new Array();

const fruitName = ["mango", "apple", "orange", "grapes"];
const myInts = [1, 2, 3, 4];
const mySquare = [1, 4, 9, 16];

const myStrArr = "mango,apple,orange".split(",");
// console.log("arrays...", { myNewArr, mysecondArray, myStrArr });

/* 
Create a string from an array
=============================================================
*/
// console.log("my fruits string...", fruitName.join());

// const str1 = 'Hello';
// const str2 = 'World';

// console.log(str1.concat(' ', str2));
// expected output: "Hello World"
// const str3 = fruitName[0].concat(",", fruitName[1]);
// const str4 = str3.concat(",", fruitName[2]);
// const str5 = str4.concat(",", fruitName[3]);

let myStr = "";
for (let i = 0; i < fruitName.length; i++) {
  myStr = myStr + fruitName[i] + ",";
}
// console.log("myStr", myStr);

function makeString(arr, separator) {
  /* 
  @arr: array
  @separator: string
  */
  // let sep = separator ? separator : ",";
  let sep = separator || ",";

  let myStr = "";
  for (let i = 0; i < arr.length; i++) {
    //   // if (i !== 0) {
    //   //   myStr += ",";
    //   // }
    //   // myStr = myStr + arr[i];
    //   // myStr += arr[i];
    //   /*
    //   // second method
    //     // if (i !== arr.length-1) {
    //     //   // myStr = myStr + ",";
    //     //   myStr += ",";
    //     // }
    //    */
    // myStr += i !== arr.length - 1 ? arr[i] + separator : arr[i]; // if we add separator at the end
    myStr += i !== 0 ? sep + arr[i] : arr[i]; // one line code // if we add separator at start
  }

  return myStr;
}

console.log(makeString(fruitName));
// console.log("str3", str3);
// console.log("str4", str4);

/* 
Access an array item by its index
=============================================================
*/

const fruitName2 = ["mango", "apple", "orange", "grapes", "apple"];
console.log(fruitName2[1]);

/* 
Find the index of an item in an array
=============================================================
*/
// const appIndex = fruitName2.findIndex((item) => item === "grapes");
const appIndex = fruitName2.findIndex(function (item) {
  return item === "apple";
});
console.log("appIndex: ", appIndex, fruitName2[appIndex]);

/* 
Check if an array contains a certain item
=============================================================
*/
console.log("is apple available: ", fruitName2.includes("apple"));

/* 
Append an item to an array
=============================================================
*/
fruitName2.push("banana");
console.log("fruites", fruitName2);
fruitName2.unshift("pineapple");
console.log("fruites", fruitName2);
/* 
Remove the last item from an array
=============================================================
*/

fruitName2.pop();
fruitName2.pop();
console.log("fruites", fruitName2);
fruitName2.shift();
fruitName2.shift();
fruitName2.shift();
console.log("fruites", fruitName2);

/* 
Array.prototype.filter()

*/

const mynums = [1, 2, 3, 4, 5, 10, 15, 20, "hi", true, "hello"];
const newArray = mynums.filter((item) => item < 5);

console.log("newArray", mynums, newArray);

/* Array.prototype.forEach() */
const myFunc = (n) => console.log(n);

const myArr = ["a", 11, "raja", true, 13, myFunc];
const myArr2 = [1, 2, 3, 4, 5];
// console.log(myArr);

function myCallBack(element, index, arr) {
  console.log("foreach", {
    element,
    index,
    arr,
  });
}

function square(n) {
  console.log(`${n} * ${n} = `, n * n);
  return n * n;
}

// myArr.forEach(myCallBack);
// myArr2.forEach(square);

/* Array.prototype.map() */
// const mySquares = myArr2.map(square);
// console.log("mySquares :", mySquares);
