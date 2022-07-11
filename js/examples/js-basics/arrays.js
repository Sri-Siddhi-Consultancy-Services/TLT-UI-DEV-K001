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
console.log("arrays...", { myNewArr, mysecondArray, myStrArr });

/* 
Create a string from an array
=============================================================
*/
// console.log("my fruits string...", fruitName.join());

// const str1 = 'Hello';
// const str2 = 'World';

// console.log(str1.concat(' ', str2));
// expected output: "Hello World"
const str3 = fruitName[0].concat(",", fruitName[1]);
const str4 = str3.concat(",", fruitName[2]);
const str5 = str4.concat(",", fruitName[3]);

let myStr = "";
for (let i = 0; i < 4; i++) {
  myStr = myStr + fruitName[i] + ",";
}
// console.log("myStr", myStr);

function makeString(arr, separator) {
  let sep = separator ? separator : ",";
  // let list = [];
  // for(let i=0; i < arr.lenghth; i++){
  // list += (arr[i])
  // }
  // console.log(list.split(" ").toString())
  // console.log(arr.toString());
  let myStr = "";
  for (let i = 0; i < arr.length; i++) {
    // if (i !== 0) {
    //   myStr += ",";
    // }
    // myStr = myStr + arr[i];
    // myStr += arr[i];
    /* 
    // second method
      // if (i !== arr.length-1) {
      //   // myStr = myStr + ",";
      //   myStr += ",";
      // }
     */
    myStr += i !== 0 ? sep + arr[i] : arr[i]; // one line code
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

/* 
Find the index of an item in an array
=============================================================
*/

/* 
Check if an array contains a certain item
=============================================================
*/

/* 
Append an item to an array
=============================================================
*/

/* 
Remove the last item from an array
=============================================================
*/

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
