// let name = "Kittu";
// name = "Patel"; //wrong

// so array are used so that we can store multiple values

let names = ["Kittu", "John", "Jane", 12, 13, true, null];
console.log(names);
names.push("Patel"); //add Patel at last

console.log(names);
names.unshift("2811"); //add 2811 at starting

console.log(names);

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
console.log(names.length);
////////
let bb = ["Kittu", "John", "Mark", "Denver", 1, true];
console.log(bb);
bb.splice(1, 1); //remove 1 element from the index 1
console.log(bb);
////////
let cc = ["Kittu", "John", "Mark", "Denver", 1, true];
console.log(cc);
cc.splice(1, 0, "Patel"); // from idex 1 it will remove 0 elements and add Patel there
console.log(cc);
/////////

let dd = ["Kittu", "John", "Mark", "Denver", 1, true];
console.log(dd);
dd.splice(1, 1, "Patel", "Jane"); // from index 1 it will remove 1 elements and add Patel and Jane there
console.log(dd);
/////////
let n = [10, 20, 30, 40, 50, 60, 70];
console.log(n);
for (let i = 0; i < n.length; i++) {
  console.log(n[i]);
}
