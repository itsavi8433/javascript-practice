
// *****************Primitive Datatypes******************** (Call By Value Datatypes)
// There are 7 types of Primitive Datatypes
/*
1.string       
2.Boolean
3.Number
4.Null
5.Undefined
6.Symbol
7.BigInt
*/
 
const score = 100;    //Number
let name = "abhishek" //String
let IsLoggedIn = false //Boolean
let outsideTemp = null //null
let UserEmail; /*or*/ UserEmail = undefined;   //undefined

const id = Symbol("8433");
const anotherId = Symbol("8433")

console.log(id == anotherId);
console.log(id ===anotherId);

const bigNumber =  8756452898938783n  //n represent BigInt
console.log(typeof bigNumber);

//*********************Refrence Datatypes(Non-Primitive)*****************(Call By Refrence)
/*
1.Array
2.Objects
3.Functions
*/

/*javascript is a dynamically typed language,it means that datatype of variable
are determined by the value the hold at runtime and we can change throughtout
the program as we assign different value to them
2.we can not define the datatype throught out the program
*/





// ******************************************************************************************

/*
There are two type of memory in javascript
1. stack memory ----> use in primitive datatypes




2. heap memory -----> use in non-primitive datatypes
*/

let myYoutubeName = "Abhishek singh"
let anotherYoutubeName = myYoutubeName;
anotherYoutubeName = "Coading world"

console.log(myYoutubeName);            //o/p = "Abhishek singh"
console.log(anotherYoutubeName);       //o/p = "Coading world"

let marks = 89;
let anotherMarks = marks;
anotherMarks = 56;

console.log(marks);
console.log(anotherMarks);
let oneValue = 44;
let anotherValue = 44;
OtherThananotherValue = anotherValue;
OtherThananotherValue = "44";

console.log(oneValue === anotherValue);  // o/p = True
console.log(oneValue ===OtherThananotherValue);   //o/p = False 


let myobj1 = {
    name:"abhishek singh",
    email:"avi19072002@gmail.com",
    phoneNumber: 8433153892
}

let myobj2 = myobj1
 
myobj2.email = "singhsumit8126@gmail.com"
myobj1.phoneNumber = 8127787883

console.log(myobj1.email);
console.log(myobj2.email);

