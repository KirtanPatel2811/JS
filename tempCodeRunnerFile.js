let e = [10, 20, 30, 40, 50, 60, 70];
let r = e.map((val, index, array) => {
  return val + 2;
});
console.log(e); // [20, 40, 60, 80, 100, 120, 140]
console.log(r);