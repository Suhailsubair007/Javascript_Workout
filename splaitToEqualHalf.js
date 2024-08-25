const array = [1, 2, 3, 4, 5, 6];

const arr1 = [];
const arr2 = [];

if (array.length % 2 !== 0) {
  throw new Error("cannot split");
}

for (let i = 0; i < array.length; i++) {
  if (i < array.length / 2) {
    arr1.push(array[i]);
  } else {
    arr2.push(array[i]);
  }
}

console.log(arr1);
console.log(arr2);
