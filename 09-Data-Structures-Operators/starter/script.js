"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery(starterIndex = 1, mainIndex = 0, time = "20:00", address) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicous pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest1 = {
  name: "Capri",
  numGuests: 0,
};
const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

/*
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

// nullish means null or undefined
//rest1.numGuests ??= 10;
//rest2.numGuests ??= 10;

rest2.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner && "<ANONYMOUS>"; //undefined
rest2.owner = rest2.owner && "<ANONYMOUS>";

console.log(rest2);
console.log(rest1);

rest1.owner &&= "<ANONYMOUS>"; //undefined
rest2.owner &&= "<ANONYMOUS>";

/*
restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // all nullish values get ignored
// 0 is a non nullish falue so 0 gets returned.

console.log("----- OR -----");
// Use ANY data type, return ANY data type, short-circuting
/*
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
const guests2 = restaurant.numGuests || 10;

console.log("----- AND -----");
console.log(0 && "Jonas");
// && is the oppisite of ||, and the last value gets returned if all is true
console.log("Hello" && 2377 && null && "jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
/*
// 1) Destructuring
//spread, on the right side of =
const arr = [1, 2, ...[3, 4]];

//Rest, because on left side on =
const [a, b, ...others] = [1, 2, 3, 4, 5];

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
// 2) Functions
// rest parameters
const add = function (...numbers) {
  // rest packs values into an array
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
// rest packs values into an array
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
// makes them into individual numbers
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach"); // mushrooms, ["onion", "olives", "spinach"], output

restaurant.orderPizza("mushrooms"); // [],  output

/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(bardNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // logs individual elements

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu); // all elements + gnocci

// Copy array

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//It Iterables: arrays, strings, maps, sets, NOT objects
const str = "Jonas";
const letters = [...str, " ", "s."];
console.log(letters); //each letter is now an individual element
console.log(...str);
//console.log(`${...str}: Schmedtmann`); //${} does not take multiple values
//Real world example
const ingredients = [
  prompt("Let's make pasta! ingredient 1?"),
  prompt("Let's make pasta! ingredient 2?"),
  prompt("Let's make pasta! ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // old way

restaurant.orderPast(...ingredients); // modern way

//Objects
const newRestautant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
//copy of the obj
//END

/*
restaurant.orderDelivery({
  time: "22:30",
  addess: "Vie del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
// overwrite a and b
({ a, b } = obj);

// nestd objs

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(open, close, o, c);

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

const [main, , secondary] = restaurant.categories;

console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;

[main, secondary] = [secondary, main];

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

const [i, , j] = nested;
const [i, , [j, k]] = nested;

const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r); // last element is undefined if default value is not set.

*/
