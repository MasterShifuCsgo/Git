let age = 30;
let oldAge = age;

age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Jonas",
  age: 30,
};
const friend = me;

friend.age = 27;

console.log("Friend", friend);
console.log("Me", me);

// Js-s primitive data types and objects
/*
PRIMITIVES
Number
String
Boolean
Undefined
Null
Symbol
Bigint
*/

/**
 * 
 * OBJECTS
Object literal
Arrays
Functions
Many more...
 */
// we call primitive values primitive types
// and obj refrence types
// this is because there are diffrences
// in how they store data in memory

// primitives are stored in the callstack
// refrences are store in the Heap

// when we make a primitive value then it
// goes in the call stack,

let age = 30;
let oldAge = age;

age = 31;
/**
 * it makes an identifier,
 * then adds age to it, with the address and after that the value
 * the age does not give you the value,
 * it first
 * calls the address and then the address points to the value
 * and then it gives you the value in age
 *
 * age is accually equal to the adress
 * and adress "says" what is in age
 *
 *i mean memory address when i say address

but theres an oldAge variable.
what would what look like??

oldAge will have the same address as age.
in other words they will point at the same address.
also a value at a certan memory address is immutable,
it can not be changed 


But if we change age to 31; 
would'nt oldAge change aswell according to your logic?

no, when we do this age = 31; a new adress will be made and
the age variable will simply point to it instead.

 */
// This works diffrently with refrence values

const me = {
  name: "Jonas",
  age: 30,
};

const friend = me;

friend.age = 27;

/**
 * When an object or any other refrance value is created
 * it is stored in the Heap, and just as before
 * you have the memory adress and the value itself
 *
 *then its in the callstack and points to an address 
 and the address point to the address in the Heap
 why sore in the heap?
 well objects might be too large to store in the callstack so 
 it's stored in the heap instead


 ok now the friend identifier
 the friend points to the exact same address as me
 again friend points to the same address where the object
 is stored in thte heap

 so now me and friend object are the exact same
 //interessting part

now when i make friend.age = 27;
friend points to the address which has the adress for the object
which is the exact same as the me object,
changes the value to 27

 

 *
 */
// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";

console.log(lastName, oldLastName);
// Refrence types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage", jessica);
console.log("After marriage", marriedJessica);

//marriedJessica = {}; // this would make a new value in the heap

// copying objects

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 21,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);
// both arrays are the same. in dffrent objects
// assign didnt reall copy it into the new object,
// this is a shallow copy
