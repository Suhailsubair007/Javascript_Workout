const fs = require("fs");

// fs.writeFile("text.txt", "This is new file", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file created and writed");
//   }
// });

// const isExixts = fs.existsSync("text.txt");

// console.log(isExixts);

// fs.rename('text.txt', 'newText.txt', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('file renamed successfully')
//     }
// })


fs.readFile('newText.txt', 'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

