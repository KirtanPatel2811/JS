// Initialize array with multiple values
let names = ["Kittu", "John", "Jane", 12, 13, true, null];
console.log(names);

names.push("Patel"); // Add "Patel" at the end
console.log(names);

names.unshift("2811"); // Add "2811" at the beginning
console.log(names);

console.log(`Array length: ${names.length}`); // Print length of array

// Working with the array `bb`
let bb = ["Kittu", "John", "Mark", "Denver", 1, true];
console.log(bb);
bb.splice(1, 1); // Remove 1 element from index 1 ("John")
console.log(bb);

// Array `cc` - Inserting without removing elements
let cc = ["Kittu", "John", "Mark", "Denver", 1, true];
console.log(cc);
cc.splice(1, 0, "Patel"); // Insert "Patel" at index 1
console.log(cc);

// Array `dd` - Replace elements at a specific index
let dd = ["Kittu", "John", "Mark", "Denver", 1, true];
console.log(dd);
dd.splice(1, 1, "Patel", "Jane"); // Replace "John" with "Patel" and "Jane"
console.log(dd);

// Iterating over array `n`
let n = [10, 20, 30, 40, 50, 60, 70];
console.log(n);
for (let i = 0; i < n.length; i++) {
  console.log(n[i]);
}

// Using `forEach` to iterate with additional information
let o = [10, 20, 30, 40, 50, 60, 70];
o.forEach((val, index, array) => {
  console.log(`Value: ${val}, Index: ${index}, Array: ${array}`);
});

// Using `map` to transform array `p`
let p = [10, 20, 30, 40, 50, 60, 70];
let q = p.map((val) => val);
console.log(q);
console.log(p);

// Transforming values with `map`
let e = [10, 20, 30, 40, 50, 60, 70];
let r = e.map((val) => val + 2); // Add 2 to each element
console.log(e);
console.log(r);

// Concatenating arrays `s` and `s1`
let s = [10, 20, 30, 40, 50, 60, 70];
let s1 = [80, 90, 100, 110, 120, 130, 140];
console.log(s.concat(s1)); // Concatenate arrays
console.log(s.indexOf(30)); // Find index of 30
console.log(s.reverse()); // Reverse the array
console.log(s.sort()); // Sort the array

// Using `slice` to extract subarray
let t = [10, 20, 30, 40, 50, 60, 70];
let a = t.slice(1, 4); // Extract values from index 1 to 3
console.log(a);

// Using `splice` to remove elements
let u = [10, 20, 30, 40, 50, 60, 70];
let a3 = u.splice(1, 4); // Remove 4 elements from index 1
console.log(a3);
console.log(u); // Remaining array

// Convert array `v` to string
let v = [10, 20, 30, 40, 50, 60, 70];
console.log(v.toString());

// Filtering values within a range
let w = [10, 20, 30, 40, 50, 60, 70];
let fi = w.filter((value) => value >= 20 && value <= 60);
console.log(w);
console.log(fi); // Print items between 20 and 60

// Filtering array for specific value
let w2 = [10, 20, 30, 40, 50, 60, 70];
let fi1 = w2.filter((value) => value == 20);
console.log(w2);
console.log(fi1);

// Finding the last index of a value
let w3 = [10, 20, 30, 40, 50, 10, 60, 70];
let fi2 = w3.findLastIndex((value) => value == 10);
console.log(w3);
console.log(fi2); // Print the last index of 10

// Converting a string to an array and using `join`
let ar = "10,20,30";
let arr = ar.split(","); // Split string into array
arr.forEach((e) => console.log(e)); // Print each element

console.log(arr);
let join = arr.join(" and "); // Join array elements with "and"
console.log(join);
