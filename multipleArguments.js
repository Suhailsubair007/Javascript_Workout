// function displayNumbers(){
//     for(let i=0;i<arguments.length;i++){
//         console.log(arguments[i]);
//     }
// }

// displayNumbers(1,2,3,4,5,6)


function displayNumbers(...args){
    args.forEach((x)=> console.log(x));
}

displayNumbers(1,2,3,4,5);
