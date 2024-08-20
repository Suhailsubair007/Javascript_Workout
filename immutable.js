const person ={
    name : "suhail",
    age: 22
};

Object.freeze(person);

person.name = "albin";
console.log(person.name);