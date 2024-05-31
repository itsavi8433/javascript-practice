// let score = "33";

// console.log(typeof score)
// console.log(typeof(score))

// // let valueInNumber = Number(score)
// //  console.log(typeof valueInNumber)

// score = 44;
// let valueInString = String(score);
// console.log(typeof valueInString);
// console.log(typeof score);

// let score = "44abc"
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);    // value of "44abc"  => Not a Number(NaN)

// score = 44;
// let valueInString = String(score);
// console.log(typeof valueInString);
// console.log(valueInString);  value ==>44

// score = null;
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);      value ==> 0
// console.log(score);
// console.log(typeof score);

// let score = undefined;
// console.log(score);

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);   //value ==> Not a Number (NaN)

let score = false;
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);    // value of false ==>0
console.log(valueInNumber);          //value of true ==>1

let isLoogedIn = "";
let valueInBoolean = Boolean(isLoogedIn);
console.log(typeof valueInBoolean);
console.log(valueInBoolean);

let loogedin = 33;                               // 0 ==> false
let valueofBoolean = Boolean(loogedin);          // 1 ==>true
console.log(typeof valueofBoolean);              // "" ==>false
console.log(valueofBoolean);                     // "abhishek" ==>true