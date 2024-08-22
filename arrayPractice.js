//Sum of Array Elements:

// let arr = [1,2,3,4,5,100];
// let sum = 0;
// for(let i=0; i<arr.length;i++)
// {
//     sum+=arr[i];
// }
// console.log(sum);

//Find the Maximum Element:

// const array = [2,4,6,7,12,89,43,23,65,90]
// let largest = array[0];

// for(let i =0 ; i<array.length; i++)
// {
//     if(array[i]>largest)
//     {
//         largest=array[i]
//     }
// }
// console.log(largest);

//Reverse an Array:

// const arr = [1,2,3,4,5,90,65,12];
// const reverded = []
// for(let i=arr.length-1; i>=0;i--){
//     reverded.push(arr[i]);
// }
// console.log(reverded);

//Count Occurrences:

// const array = [1,2,3,4,5,6,1,5,8,9,1,1,1,1,1]
// let count = 0;
// let toFind = 1;

// for(let i=0; i<array.length;i++){
//     if(array[i]===toFind)
//     {
//         count++;
//     }
// }

// console.log(count);

//Check if Array Contains a Value:

// function containsValue(array, value) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             return true;
//         }
//     }
//     return false;
// }
// let array = [3, 5, 7, 8, 9, 1, 3, 2];
// let value = 2;

// let result = containsValue(array, value);
// console.log(result);  // Output: true

//Remove Duplicates:

// const orginalArry = [1,2,3,4,5,6,1,2]
// const newArry = new Set([...orginalArry])
// console.log(newArry);

// const array = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 90, 34, 2, 1, 32, 54, 67];
// let unique = []
// let dupli = []

// for(let i=0; i<array.length;i++){
//     let count = 0;
//     for(let j=0; j<array.length;j++){
//         if(i!==j && array[i]===array[j])
//         {
//             count++
//             break
//         }
//     }
//     if(count===0){
//         unique.push(array[i])
//     }else{
//         dupli.push(array[i])
//     }
// }
// console.log(unique);
// console.log(dupli);

//merge two arrays

// const array1 = [1,2,3,4]
// const arry2 = [5,6,7,8]
// const merged = [...array1,...arry2]
// console.log(merged);

//Filter odd and even

// const arry = [1,2,3,4,5,6,7,8,9,10]
// const odd= []
// const even =[]

// for(let i =0;i<arry.length;i++)
// {
//     if(arry[i]%2===0)
//     {
//         even.push(arry[i])
//     }else{
//         odd.push(arry[i])
//     }
// };
// console.log(odd);
// console.log(even);

//Sort an Array:

// const array = [5, 7, 3, 90, 21, 65, 34, 90, 43, 12, 77, 33, 12, 94];
// const sorted = array.sort((a, b) => b - a);
// console.log(sorted);


// const array = [5, 7, 3, 90, 21, 65, 34, 90, 43, 12, 77, 33, 12, 94];
// let sorted = [];
// let temp;
// for (let i = 0; i < array.length - 1; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] > array[j]) {
//       temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// }

// for (let i = 0; i < array.length; i++) {
//   sorted.push(array[i]);
// }

// console.log(sorted);
