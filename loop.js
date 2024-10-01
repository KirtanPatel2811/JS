for (var i = 0; i < 10; i++) {
  console.log("Hello", i);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  console.log("2 x " + i + "=" + 2 * i);
}

for (let i = 0; i < 10; i++) {
  console.log(`2 x ${i} = ${2 * i}`);
}
//while
var i = 1;
while (i < 10) {
  console.log("Hello");
  i++;
}
// do while
var i = 1;

do {
  console.log("Hello");
  i++;
} while (i < 10);
