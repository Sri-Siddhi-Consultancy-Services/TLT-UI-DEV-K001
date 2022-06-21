/* 
1. Global Scope
2. Block Scope
3. Function Scope
*/

// 1. Global Scope
let a = 10;
let car = {
  model: "Nexon",
  color: "black",
  make: "Tata",
  mfgYear: 2022,
};

// 2. Block Scope
if (a === 10) {
  let b = 5;
  //   console.log("a value is", a, "value b is", b);
  //   console.log("b", b);
  //   car.model = "Harrier";
  //   car.mfgYear = 2021;
  //   console.log("car model", car.model);
  //   console.log("car mfgYear", car.mfgYear);
}

console.log("a", a);

// 3. Function Scope
function sum(d, e) {
  let c = 10;
  a = 5;
  console.log(a + c + d + e);

  car.model = "Harrier";
  car.mfgYear = 2021;
  console.log("car model", car.model);
  console.log("car mfgYear", car.mfgYear);
}
sum(2, 5);
console.log("car object", car);

// console.log("a is: ", a);
// console.log("c is: ", c);
