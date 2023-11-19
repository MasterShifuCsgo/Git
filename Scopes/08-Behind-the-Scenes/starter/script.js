"use strict";

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
