// Type Conversion

//Number To String

let a;
a = 25;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = "25.5";
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = true;
console.log(a, typeof a);
a = a.toString();
console.log(a, typeof a);

a = new Date();
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = [25, 35, 45];
console.log(a, typeof a);
a = a.toString();
console.log(a, typeof a);

//String to Number

a = "125";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = true;
console.log(a, typeof a);
a = parseInt(a);
console.log(a, typeof a);

a = "25.5";
console.log(a, typeof a);
a = parseFloat(a);
console.log(a, typeof a);

a = [25, 35, 45];
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = "gokulraj";
console.log(a, typeof a);
a = parseInt(a);
console.log(a, typeof a);
