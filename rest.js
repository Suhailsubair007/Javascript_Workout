// function sum(...numbers) {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1, 2, 3, 4)); // 10



// const obj = { name: "Suhail", age: 22 };
// const newObj = { ...obj, location: "India" };
// console.log(newObj); // { name: "Suhail", age: 22, location: "India" }



function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }
  console.log(greet()); // "Hello, Guest!"
  