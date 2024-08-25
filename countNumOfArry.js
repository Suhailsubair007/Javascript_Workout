const arr = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4], 1, 2, [3, 2, 1]];
let count =0 ;

for(const x of arr){
    if(Array.isArray(x)){
        count++
    }
}
console.log(count);