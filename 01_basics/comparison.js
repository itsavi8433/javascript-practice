// let a = 2;
// let b =4;
// console.log(a>b);

// a = 30;
// b = 30;
// console.log(a===b);

// a = 309;
// b =202;
// console.log(a<b);

// a = 27;
// b =28;
// console.log(a==b);

// a = 46;
// b =28;

// console.log(!(a<b));


// console.log("2" > 1);  //o/p = true
// console.log("2"< 1);   // o/p = false
// console.log("2">= 1);   //o/p = true
// console.log("2" == 1);  //o/p = false

console.log(null > 0);
console.log(null === 0);
console.log(null == 0);
console.log(null >= 0);

//compare only those which have same Datatypes
//otherwise we can't predict the result of the comparison

//the reason is that an equality check (==) and comparison (> < >= <=) work diffrently. 
//The comparison convert null to a number, treating it as 0 That'why null>=0 is true
//and null==0 is false

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

//  == ---> check the number equal or not 
// === ---> strictly check the number equal or not or also check the datatype same or not