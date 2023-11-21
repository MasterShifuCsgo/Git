"strict mode";
console.log(this); // returns windows object
// look at Folder Scopes/starter/script.js
// and scroll all the way down

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined 'scrit mode';
  // there are diffrences between global this and
  //function scoped this
};

calcAge(1991);

const caclAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // window object
  // this keyword dosent exist in an arrow function
  // so instead of being undefined like last time,
  // it points to the global this keyword
  // so its the exact same as the code above
};

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
  },
};
// this works aswell
jonas.calcAge();

// the only reason that this works here is because
// jonas is calling this method
/*
you might think that the this keyword pints to
jonas because its in the object called jonas.
This is not true, the reason why the this keyword
will point ot jonas in this case, is because jonas
was the object calling the that method.
*/
// let me show you why that is

const matilda = {
  year: 2017,
};
// rememeber that a function is just a value
// therefore we can do this.

matilda.calcAge = jonas.calcAge;
//now when you look at matilda it also has
// the calcage function;
// this is called method borrowing;
matilda.calcAge();
// what do you think the this keyword
// would look like now.
//this points to the matilda object
//  this proves that the this keyword
// always points to the object calling the method

const f = jonas.calcAge;
// this copies calcage function to f variable.
// you would call it if you used ();
// But you arent calling it. You are assinging it

//when you call 'f' you get this
/*
ƒ () {
    console.log(2037 - this.year);
  }
*/

// now what happens when you call it.
// spoilers!
// undefined
// and also this error where it cant find
// this.year anywhere, i think ou know why.
// there is no owner to the function call
// therefore it proves my point again.
