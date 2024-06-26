// Primitive
// Numbers 5
// Booleans true
// Strings 'To be or not to be'
// undefined
// null
// Symbol("just me")

// Non-Primitive
// Objects {}
// Arrays that are objects
// functions that are objects aswell

// JS wraps primitives when trying to access a property
console.log(true.toString());
console.log(true);

var array = [1, 2, 3];
// =
var arrayObj = {
  0: 1,
  1: 2,
  2: 3,
};

// Pass by value and by reference

var a = 5;
var b = a;
b++;

console.log(a);
console.log(b);

let obj1 = { name: "Yao", password: "123" };
let obj2 = obj1;

obj2.password = "easypeasy";
console.log(obj1);
console.log(obj2);

let obj = {
  a: "a",
  b: "b",
  c: {
    deep: "try and copy me",
  },
};
let clone = Object.assign({}, obj); // Shallow cloning
let clone2 = { ...obj }; // Shallow cloning
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = "hahaha";
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);

// Pass by reference exercise

const number = 100;
const string = "Jay";
let newObj1 = {
  value: "a",
};
let newObj2 = {
  value: "b",
};
let newObj3 = newObj2;

function change(number, string, newObj1, newObj2) {
  number = number * 10;
  string = "Pete";
  newObj1 = newObj2;
  newObj2.value = "c";
  console.log(newObj1);
}

change(number, string, newObj1, newObj2);

console.log(number);
console.log(string);
console.log(newObj1.value);
