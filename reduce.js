const numbers = [1,2,3,4,5,6,7,8]

const sum = numbers.reduce((acc,curr)=>{
    return acc + curr;
},0);

console.log(numbers);
console.log(sum)


//The map() method creates a new array with the results of calling a provided function on every element in the calling array. Whereas, the reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.