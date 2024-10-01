function kittu() {
  console.log("Hello");
}

kittu(); //Output
kittu();
//////
function para(a) {
  console.log("Hello" + a);
}

para(" World"); //Output
///////
function sum(a, b) {
  console.log(a + b);
}

sum(3, 4);
//////////
function add(c, d) {
  console.log(c + d);
}
let x = 5;
let y = 6;
add(x, y);
//////////
function addd(h, g, k) {
  console.log(h + g + k);
}
let n = 5;
let m = 6;
addd(n, m, 10);
////////////
function abc(a, b, c) {
  return a + b + c;
}
let l = 10;

let ll = 15;
console.log(abc(20, l, ll));
////////

function abc(a, b, c) {
  return a + b + c;
}
let i = 10;

let ii = 15;
let addition = abc(20, i, ii);
console.log(addition);
///////////////////
// local , global

let a = 10; //global

function local() {
  let b = 15;
  console.log(a); //10
  console.log(b); //15
}

local();

console.log(a); //printed becuase its global

// console.log(b); //undefined - not working

////////////////
// Different types of functions

//anoynomuos function
let fun = function () {
  //here function is not having name it is stored in fun
  console.log("Hello");
};

fun();
// if don't want to store the function in something then do this

(function () {
  console.log("Hello");
})();

// IIFE (Immediately Invoked Function Expression)
//
//arrow function
let aa = (a, b) => {
  return a + b;
};

console.log(aa(2, 2));
//it also works like this
let ab = (a, b) => console.log(a + b);
ab(1, 1);
