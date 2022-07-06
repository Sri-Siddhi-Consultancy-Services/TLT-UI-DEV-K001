/* 
javascript Array:

built in methods

forEach, map, reduce, findIndex, find, 

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
const mySquares = myArr2.map(square);
console.log("mySquares :", mySquares);
