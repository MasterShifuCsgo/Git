"use strict";
/*
// REAL CODE SHOULD NOW BE THIS CONFUSING
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `Your are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Block scope
      var millenial = true;
      //Creating NEW variable with same name as
      //outer scope's variable

      // js always looks for the first variable in the scope chain that it is looking for
      //in this case "firstName"; is not 'Jonas' but 'Steven';
      const firstName = "Steven";
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      // functions can be block scoped, error happens ONLY for strict mode
      function add(a, b) {
        return a + b;
      }
      // Reasssigning outer scope's variable
      output = "NEW OUTPUT!";
    }
    console.log(millenial); //true
    //console.log(add(2, 3)); // add is notdefinced in 'strict mode';
    console.log(output);
  }
  //console.log(str);
  printAge();
  return age;
}

const firstName = "Jonas";
calcAge(1991);
//console.log(age); refrenceerror
//printAge(); no access to function

*/

/*
//Hoisting with:

// Variables
console.log(me);
//console.log(job); RefrenceError
//console.log(year); RefrenceError

var me = "Jonas";
let job = "teacher";
const year = "1991";

//Functions
console.log(addDecl(2, 3)); // return 5, hoists
//console.log(addExpr(2, 3)); RefrenceError -> // if const
//console.log(addArrow); // undefined // if var
//console.log(addArrow(2, 3)); RefrenceError  -> // if const

function addDecl(a, b) {
  return a + b;
}

// if called before then its the exact same as undefined(2, 3);
var addExpr = (a, b) => {
  // TypeError if called before declaration
  return a + b;
};

var addArrow = (a, b) => a + b; // TypeError if called before decl

//Mistake that you might make

//Example

// true because undefined is a falsy value
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}
// cons logs //console.log("All products deleted!");
/*
 This is why you shouldnt use var to declare variables
 a rule of thumb: write your variables at the top of your scope,
 you have a higher chance of avoiding mistakes like this and,
 it will make your code look better.
*/
/*
var x = 1;
let y = 2;
const z = 3; /*
 windows is a global object in the javascript browser
 it includes things like alert(), prompt() and many more;
 but now there is a property called x: 1 which is the x we just declaredl
 but there is no y or z property
 this is because they were delcaredd with let and const
*/

/*
console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
// You might aswell take a look inside the windows object,
// because it quite interestin what is in there.
*/

// The this keyword
// go to the folder called this.Keyword.js
