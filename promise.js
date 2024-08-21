const promise = new Promise((resolve,reject)=>{
    if(true)
    {
        resolve('sucessfull');
    }else{
        reject('error')
    }
});

promise.then((message)=>{
    console.log(message);
}).catch((err)=>{
    console.log(err);
})

