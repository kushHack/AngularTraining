import fetch from "node-fetch";

/******************  Types ******************/
console.log("/******************  Types ******************/");

let myName = "kushagra";
/* myName = 29 */ // Will throw error as variable is already initialized
myName = "not kushagra"; // changing to same data type won't throw error

let anyVar: any = "Kushagra";
anyVar = 5; // Not throw error as type is any (reverts back to js)

const str: String = "Kushagra";
const numb: Number = 8;
const bool: Boolean = true;

// function

const myLogger = (str: String) => {
  // will ony accept string as an argument
  console.log(str);
};

myLogger("hello world"); //no errors
/* myLogger(08) */ // Will throw error as number is passed

const typedFunction = (): Boolean => {
  return true;
};

let greet: Function;

// greet = "kushagra" // will throw error

greet = () => {
  console.log("hello");
};

greet();

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};
add(5, 6);
const add1 = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};
add1(5, 6);
//Array

let names = ["luigi", "mario", "yoshi"];

names.push("toad");
// names.push(3); // will throw error
// names[1] = 3; // will throw error

let numberss = [10, 20, 12, 15];

numberss.push(25);
// numberss.push('shaun'); // will throw error
// numberss[0] = 'shaun'; // will throw error

let mixed = ["ken", 4, "chun-li", 8, 9];

mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;
// mixed.push(true) // Will throw error

let stringArr: string[] = [];
stringArr.push("kushagra");
stringArr.push("himanshu");
// stringArr.push(8) // will throw error

//mixed type arrays
let customMixedArr: (string | Boolean | Number)[] = [];
customMixedArr.push("kushagra");
customMixedArr.push(8);
customMixedArr.push(true);

//Object

let ninjaOne: object;

ninjaOne = {
  name: "Naruto",
  age: 18,
  jonin: false,
};
console.log(ninjaOne);

ninjaOne = {
  name: 18,
  age: "Naruto",
};
console.log(ninjaOne);

let ninjaTwo: {
  name: String;
  age: Number;
  specialAttack: String;
};

/*
    ninjaTwo = {
        name: "kushagra", //will throw error as all feilds are not
    }
*/

ninjaTwo = {
  name: "Naruto",
  age: 18,
  specialAttack: "Shadow Clone",
};

// ninjaTwo = { // Will throw error
//   name: 18,
//   age: "Naruto",
//   specialAttack: "Shadow Clone"
// }

interface Ninja {
  name: String;
  age: Number;
  specialAttack: String;
}

const printNinjaDetails = (ninja: Ninja) => {
  console.log(ninja);
};

printNinjaDetails(ninjaTwo);
// printNinjaDetails(ninjaOne) // will throw error

// class
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
// invoices.push({ name: 'shaun' }); //will throw error

console.log(invoices);

interface Vehicle {
  seatingCapacity: number;
  tyres: number;
  color: string;
  company: string;
}

class Cars implements Vehicle {
  seatingCapacity: number;
  tyres: number;
  color: string;
  company: string;

  constructor(s: number, t: number, col: string, com: string) {
    this.seatingCapacity = s;
    this.tyres = t;
    this.color = col;
    this.company = com;
  }
}

class Bike implements Vehicle {
  seatingCapacity: number;
  tyres: number;
  color: string;
  company: string;

  constructor(s: number, t: number, col: string, com: string) {
    this.seatingCapacity = s;
    this.tyres = t;
    this.color = col;
    this.company = com;
  }
}

const baleno = new Cars(4, 4, "blue", "Maruti");
const maestro = new Bike(2, 2, "blue", "Hero");

const ownedVehicle: Vehicle[] = [];
ownedVehicle.push(baleno);
ownedVehicle.push(maestro);

console.log(ownedVehicle);

interface User {
  id: number;
  name: string;
}

type Users = {
  id: number;
  name: string;
  cardnumber?: number;
};

//interface can be reopened
interface User {
  email: string;
}

/*
  type Users = {
    email: string // will throw error as type can't be changed after being created
  }
*/

//interface can be extended
interface Admin extends User {
  role: "admin" | "customer";
}

/* type Admins extended Users */ // will throw error as type can't be extended

type Admins = Users & {
  role: "admin" | "customer"; //extending type via intersection
};

const ad: Admin = {
  id: 8,
  name: "kushagra",
  email: "kushagra@mail.com",
  role: "admin",
};

const cus: Admins = {
  id: 8,
  name: "kushagra",
  role: "customer",
};

interface cardDetails {
  cardNumber: number;
  nameOnCard: string;
  cvv: number;
}

interface customers {
  id: number;
  name: string;
  email: string;
  mobile: number;
  cardDetails: cardDetails;
}
/*
  interface customers {
    id: number;
    name: string;
    email: string;
    mobile: number;
    cardDetails: {
      cardNumber: number;
      nameOnCard: string;
      cvv: number;
    };
  }
*/

const cust: customers = {
  id: 8,
  name: "kushagra",
  email: "kushagra@mail.com",
  mobile: 4823564823,
  cardDetails: {
    cardNumber: 12325687458978,
    nameOnCard: "Kushagra singh",
    cvv: 327,
  },
};

console.log(cust);

/******************  Loops ******************/
console.log("/******************  Loops ******************/");

//For Of
let arr: number[] = [10, 20, 30, 40];
for (var val of arr) {
  console.log(val);
}

let strs = "Hello World";

for (var char of str) {
  console.log(char); // prints chars: H e l l o  W o r l d
}

//For in
let array = [10, 20, 30, 40];

for (var index in array) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(array[index]); // prints elements: 10, 20, 30, 40
}

//for each
array.forEach(myFunction);
function myFunction(item: number, index: number, arr: number[]) {
  arr[index] = item * 10;
}
console.log(array);

/******************  OOPS ******************/
console.log("/******************  OOPS ******************/");

// Abstraction

abstract class Character {
  public name: string;
  public damage: number;
  public attackSpeed: number;

  constructor(name: string, damage: number, speed: number) {
    this.name = name;
    this.damage = damage;
    this.attackSpeed = speed;
  }

  public abstract damagePerSecond(): number;
}

class Goblin extends Character {
  constructor(name: string, damage: number, speed: number) {
    super(name, damage, speed);
  }

  public damagePerSecond(): number {
    return this.damage * this.attackSpeed;
  }
}

// Encapsulation
class Character1 {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }
}

// Inheritance

//Orc class will inherit from the Character2 class by extending from it.
class Character2 {
  public name: string;
  public damage: number;

  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }

  public talk(): void {
    console.log("Says something ...");
  }
}

class Orc extends Character2 {
  public weapon: string;

  constructor(name: string, damage: number, weapon: string) {
    super(name, damage);

    this.weapon = weapon;
  }

  public attack(): void {
    console.log(`Attacks his target with his ${this.weapon}.`);
  }
}

// Polymorphism
//The child class is overwriting the properties and methods of its parent class.

class Character3 {
  public name: string;
  public damage: number;

  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }

  public talk(): void {
    console.log("Says something ...");
  }

  public attack(): void {
    console.log(`Attacks his target with his fists.`);
  }
}

class Orc2 extends Character3 {
  public weapon: string;

  constructor(name: string, damage: number, weapon: string) {
    super(name, damage);

    this.weapon = weapon;
  }

  public talk(): void {
    console.log("Says something but in orcish ...");
  }

  public attack(): void {
    console.log(`Attacks his target with his ${this.weapon}.`);
  }
}

/******************  Async await fetch promises ******************/
console.log(
  "/****************** Async await fetch promises ******************/"
);

interface data {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
const fetchData = async (): Promise<data> => {
  const response = await fetch("https://dummyjson.com/products/1");
  const jsonData: data = await response.json();
  return jsonData;
};

const fetchDataPromise = (): Promise<data> => {
  const data = fetch("https://dummyjson.com/products/1");
  data.catch((error) => {
    console.log(error);
  });
  return data.then((d) => d.json());
};

const logFetchedData = async (fetch: () => Promise<data | data[]>) => {
  try {
    const data = await fetch();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const fetchdataArray = async () => {
  const dataArr: data[] = [];
  for (let index = 1; index <= 10; index++) {
    const response = await fetch(`https://dummyjson.com/products/${index}`);
    const jsonData: data = await response.json();
    dataArr.push(jsonData);
  }

  return dataArr;
};

logFetchedData(fetchData);
logFetchedData(fetchDataPromise);
logFetchedData(fetchdataArray);
