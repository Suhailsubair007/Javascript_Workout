process.env.UV_THREADPOOL_SIZE = 5;
const fs = require('fs');
const crypto = require('crypto')
const start = Date.now()





setTimeout(()=>console.log("Set timeout 1"),0);
setImmediate(()=>console.log("Set immediate 1"));

fs.readFile('sample.txt','utf-8',()=>{
    console.log('File readed');
    setTimeout(()=>console.log("Set timeout 6"),0);
    setImmediate(()=>console.log("Set immediate 2"));

    // crypto.pbkdf2('password1','salt1',100000,1024,'sha512',()=>{
    //     console.log(`${Date.now() - start}`,'password 1 hasherd');
    // })
    // crypto.pbkdf2('password2','salt1',100000,1024,'sha512',()=>{
    //     console.log(`${Date.now() - start}`,'password 2 hasherd');
    // })
    // crypto.pbkdf2('password3','salt1',100000,1024,'sha512',()=>{
    //     console.log(`${Date.now() - start}`,'password 3 hasherd');
    // })
    // crypto.pbkdf2('password4','salt1',100000,1024,'sha512',()=>{
    //     console.log(`${Date.now()- start}`,'password 4 hasherd');
    // })
    // crypto.pbkdf2('password5','salt1',100000,1024,'sha512',()=>{
    //     console.log(`${Date.now()- start}`,'password 5 hasherd');
    // })
})
setTimeout(()=>console.log("Set timeout 2"),0);
setTimeout(()=>console.log("Set timeout 3"),0);
setImmediate(()=>console.log("Set immediate 2"));

console.log('Hi suhial');