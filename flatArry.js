const arr = [1,2,3,[6,7],9,12,[11,32,56]]
const flatted = arr.flat()
console.log(flatted);
let result = flatted.reduce((acc,curr)=>{
    return acc+=curr;
},0);
console.log(result);