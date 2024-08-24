const person = 
[
    {
        name: "suhail",
        age:20,
    },
    {
        name: "sam",
        age:22,
    },
    {
        name: "amal",
        age:24,
    },
    {
        name: "naseeb",
        age:25,
    }

];

// let found = person.find((x)=> x.age > 23)
// console.log(found);
let found = person.filter((x)=> x.age > 23)
console.log(found);