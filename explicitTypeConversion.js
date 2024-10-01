result = "3";
result = Number(result);
console.log(result); // Output: 3
console.log(typeof result); // Output: number

result = null;
result = String(result);
console.log(result); // Output: null
console.log(typeof result); // Output: string

result = true;
result = String(result);

console.log(result); // Output: true
console.log(typeof result); // Output:

result = 20.232;
result = parseInt(result);

console.log(result); // Output: 20
