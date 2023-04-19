/******************  Data Types ******************/
console.log("/******************  Data Types ******************/");

// Number -> Used for Decimals and Integers
const number = 23;
console.log(`The Type of number is ${typeof number} and value is ${number}`);
// String -> Used for Text
const string = "Kushagra";
console.log(`The Type of string is ${typeof string} and value is ${string}`);

// Boolean -> Logical Operator
const boolean = false;
console.log(`The Type of boolean is ${typeof boolean} and value is ${boolean}`);

// Undefined -> Non initialized value
// Type of undefined is also undefined
let undefined;
console.log(
  `The Type of Undefined is ${typeof undefined} and value is ${undefined}`
);

// Null
const blank = null;
console.log(`The Type of null is ${typeof blank} and value is ${blank}`);

// BIgInt
// Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
const int = 1234567890123456;
const bigint = 12345678901234567n;
const bignum = BigInt("12345678901234567"); // Typecasting
console.log(`The Type of null is ${typeof int} and value is ${int}`);
console.log(`The Type of null is ${typeof bigint} and value is ${bigint}`);

/** **************** Variable Declaration ******************/
console.log("/******************  Variable Declaration ******************/");

// Introduced in ES6 Modern Javascript

// Const -> Can't be reassigned or immutable
/* const birthyear; */ // needs to be initialized otherwise it will throw error
const birthyear = 1999;
/* birthyear = 2000 */ // cant be reassigned it will throw error

// let -> can be reassigned
let age; // no need to initialize // can cause errors
age = 23;
console.log(age);
age = "Twenty Two";
console.log(age);

if (birthyear === 1999) {
  const myAge = 23;
}

/* console.log(myAge); */ // will throw error as let is block scoped.

// Var -> can be reassigned
// similar to let but different in terms of scope
let num; // no need to initialize // can cause errors
num = 8;
console.log(num);
num = "eight";
console.log(num);

if (birthyear === 1999) {
  var currAge = 23;
}

console.log(currAge); // we can use outside of block as it is pre ES6 and block scope is introduced in ES6
// Therefore we shoulld avoid using "var" and use "let" and "const"

/****************** Operators ******************/
console.log(/****************** Operators ******************/);
const a = 9;
const b = 3;

/* Arithmetic Operators */
// Add(+) Operator
const sum = a + b;
console.log(sum);

const firstName = "Kushagra";
const lastName = "Singh";
console.log(firstName + " " + lastName);

// Subtract(-) Operator
const diff = a - b;
console.log(diff);

// Multiplication(*) Operator
const product = a * b;
console.log(product);

// Division(/) Operator
const div = a / b;
console.log(div);

// Power(**) Operator
console.log(2 ** 3);

// Modulus
console.log(10 % 2);

// Increment Operator
let z = 5;
const t = a + z++; // move to next statement then incremnts // z = 5
console.log(t);

const y = a + ++z; // z = 7
console.log(y);

const k = a + z--; // move to next statement then incremnts // z = 5
console.log(t);

const q = a + --z; // z = 7
console.log(y);

/* Assignment Operators */
let x = 8;
console.log(x);

x += a; // same as x = x + a
console.log(x);

x -= a; // same as x = x - a
console.log(x);

x *= a; // same as x = x * a
console.log(x);

x /= a; // same as x = x / a
console.log(x);

x %= b; // same as x = x % b
console.log(x);

x **= 2; // same as x = x ** 2
console.log(x);

const buttonOn = true;
console.log(buttonOn);
const buttonOff = !buttonOn; // buttonOff = false
console.log(`buttonOff = ${buttonOff}`);

/* Comparision Operators */

console.log(a > b);
console.log(a >= b);
console.log(a <= b);
console.log(a < b);

const num1 = 8;
const num2 = 16 / 2;
const num3 = "8";

console.log(num1 == num3); // returns true as It will compare irrespective ve of datatype of variable
console.log(num1 == num2); // returns true
console.log(num1 === num2); // returns true
console.log(num1 === num3); // returns false as It will compare checks, check means it will check datatype as well

/* Logical Operators */

// And Operator (&&)

if (a === b && num1 === num2) {
  console.log(true); // will return false as both of the conditions needs to be true
} else {
  console.log(false);
}

// OR Operator (||)

if (a === b || num1 === num2) {
  console.log(true); // will return true as any one of the conditions needs to be true
} else {
  console.log(false);
}

// NOT Operator (!)

if (a != b) {
  console.log(true); // will return true as a is not equal to b
} else {
  console.log(false);
}

/* Bitwise Operators */

// AND Operator (&)
const andO = 5 & 1; // Sets each bit to 1 if both bits are 1
console.log(andO);

// OR Operator (|)
const OrO = 5 | 1; // Sets each bit to 1 if one of two bits is 1
console.log(OrO);

// XOR Operator (^)
const XorO = 5 ^ 1; // Sets each bit to 1 if only one of two bits is 1
console.log(XorO);

// NOT Operator (~)
const NotO = ~5; // Inverts all the bits
console.log(NotO);

// Left Shift Operator (<<)
const lsO = 5 << 1;
console.log(lsO); // Shifts left by pushing zeros in from the right and let the leftmost bits fall off

// Right Shift Operator (>>)
const rsO = 5 >> 1;
console.log(rsO); // Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off

// Unsigned Right Shift Operator
const ursO = 5 >>> 1;
console.log(ursO); // Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

/* Ternary Operator (?) */
const personAge = 19;
personAge > 18 ? console.log("You can drive") : console.log("You can't drive");

/* Type Operator */
// typeof
console.log(typeof personAge); // Returns the type of a variable

// instanceof
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);
// Returns true if an object is an instance of an object type
console.log(auto instanceof Car);
// Expected output: true
console.log(auto instanceof Object);
// Expected output: true

/****************** Template Literals ******************/
console.log("/****************** Template Literals ******************/");

const customerFirstName = "Kushagra";
const customerLastName = "Singh";
const customerAge = 23;
const bio = `My name is ${customerFirstName} ${customerLastName}. I am ${customerAge} years old.`;
console.log(bio);

/****************** Switch Statement ******************/
console.log("/****************** Switch Statement ******************/");

const day = "monday";

switch (day) {
  case "monday":
    console.log("blue");
    break;
  case "tuesday":
    console.log("orange");
    break;
  case "wednesday":
    console.log("green");
    break;
  case "thursday":
    console.log("yellow");
    break;
  case "friday":
    console.log("purple");
    break;
  case "saturday":
    console.log("black");
    break;
  case "sunday":
    console.log("white");
    break;
  default:
    console.log("red");
    break;
}

/****************** If else statement ******************/
console.log("/****************** If else statement ******************/");

const time = 5;

if (day === "monday") {
  if (time < 12) {
    // nested if else
    console.log("turquoise");
  } else {
    console.log("blue");
  }
} else if ((day = "tuesday")) {
  console.log("green");
} else {
  console.log("purple");
}

/****************** Loops ******************/
console.log("/****************** Loops ******************/");

// for loop
for (let i = 0; i < 5; i++) {
  console.log(`The number is ${i}`);
}

// for in object
const person = { fname: "kushagra", lname: "singh", age: 23 };

let text = "";
for (const x in person) {
  text += person[x];
}

console.log(text);

// for in array
const numbers = [45, 4, 9, 16, 25];
let txt = 0;
for (const x in numbers) {
  txt += numbers[x];
}
console.log(txt);

// for each
const sums = 0;
numbers.forEach(myFunction);
function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
console.log(numbers);

// map
const array = [1, 4, 9, 16];
const map = array.map((x) => x * 2);
console.log(map);

// while
let count = 0;
let res = 0;
while (count < 5) {
  res += 1;
  count++;
}
console.log(res);

/****************** Functions ******************/
console.log("/****************** Functions ******************/");
function logger(value) {
  console.log(value);
}

logger("hello world");

function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
greeting(sayHello, "JavaScript!");

//Arrow Function
const calcAge = (birthYear) => 2023 - birthYear;
console.log(calcAge(1999));

const calcAge2 = (firstName, birthYear) => {
  let age = 2023 - birthYear;
  console.log(`My name is ${firstName} and I am ${age} years old`);
};

calcAge2("kushagra", 1999);

/****************** strings ******************/
console.log("/****************** strings ******************/");
let fruits = "Apple,Mango,Banana";
let fruitsArr = fruits.split(",");
console.log(fruitsArr);

let strName = "hello world";
console.log(strName.indexOf("ld")); // 9
console.log(strName.indexOf("world")); // 6

let strings = "Programming is fun";
console.log(strings.search("fun"));
console.log(strings.indexOf("n", 10));

/****************** Filter ******************/
console.log("/****************** Filter ******************/");
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(result);

/****************** Arrays ******************/
console.log("/****************** Arrays ******************/");

const friends = ["steaven", "michel", "rachel"];
console.log(friends);
console.log(friends[0]);
friends[1] = "jay";
console.log(friends);
friends.unshift("John"); // adds to start
console.log(friends);
friends.push("michel"); // adds to last
console.log(friends);
friends.pop(); //removes from last
console.log(friends);
friends.shift(); // removes from start
console.log(friends);
console.log(friends.indexOf("rachel")); // returns index of element
console.log(friends.indexOf("bob")); // returns -1 as it is not present in the array
console.log(friends.includes("rachel")); // returns boolean if element is present
const years = new Array(1999, 2001, 2002, 2003);
const newYears = [2004, 2005, ...years]; // spread operator spreads the array
console.log(newYears);
console.log(years.length);
console.log(years);

/****************** objects ******************/
console.log("/****************** objects ******************/");

const kushagra = {
  firstName: "kushagra",
  lastName: "Singh",
  age: 2023 - 1999,
  job: "developer",
  friends: ["steaven", "michel", "rachel"],
  details: function () {
    return `My name is ${firstName} ${lastName}. I am ${age} years old. I am a ${this.job}. I have ${friends.length} friends.`;
  },
};

console.log(kushagra);
console.log(kushagra.firstName);
console.log(kushagra["firstName"]);
const nameKey = "Name";
console.log(kushagra["first" + nameKey]);
console.log(kushagra["last" + nameKey]);
console.log(kushagra.details());

/****************** Destructure ******************/
console.log("/****************** Destructure ******************/");
let l, m, rest;
[l, m] = [10, 20];

console.log(l); // Expected output: 10

console.log(m); // Expected output: 20

[l, m, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); // Expected output: Array [30, 40, 50]

/****************** Fetch async await and promises ******************/
console.log(
  "/****************** Fetch async await and promises ******************/"
);

async function getData() {
  const response = await fetch("https://dummyjson.com/products/1");
  const jsonData = await response.json();
  return jsonData;
}

async function logData() {
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

logData(); // this will be logged later

console.log("hello world"); //this will be logged first
