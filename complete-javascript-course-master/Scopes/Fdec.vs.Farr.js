"strict mode";

var firstName = "Matilda";

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const self = this; // self can also be that
    // this is a solution you might find in some older codebases
    // but there is a better solution and its to use an arrow function
    /*const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    // isMillenial(); this is undefined;*/
  },

  // here this keyword inherits from its parent scope bc its an arrow funcition
  isMillenial = () => {
    console.log(this);
    console.log(this.year >= 1981 && this.year  <= 1996);
},
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.isMillenial();
jonas.greet(); //Hey undefined
// this keyword does not exist in an arrow function
// instead it gets the output form the surrounding scope;
// the object above does not make its own scope
// the above code is an object literal
// all of the objects code is still in te global scope

var firstName = "Matilda";
console.log(this.firstName);
// this is another reason not to use var
// it creates global properties that can be accessed
// with this on the global scope

jonas.calcAge();

// arguments keyword
const addExpr = function (а, b){
    console.log(arguments); // you can use these arguments
    return a + b;
}
var addArrow = (a, b) => a + b;

addExpr(2, 5);
addExpr(2, 5, 8, 12); // you can use these argumentsm, 
//even if the func has 2 parems


var addArrow = (a, b) => {
    console.log(arguments);
    return a + b
};

addArrow(2, 5, 8);

