// const person ={
//     name:"suhail",
//     age:22,
// };
// const person2 = {
//     name:"amal",
//     age:27
// }


// function printFullname(){
//     console.log(`This is your name ${this.name} and you are ${this.age} years old`);
// }


// printFullname.call(person);
// printFullname.call(person2);

// const printFullNameFunction = printFullname.bind(person);
// printFullNameFunction();
// printFullNameFunction();










const person ={
    name:"suhail",
    age:22,
    greet: function(){
        console.log(`H ${this.name} you are ${this.age} years old`);
    }
};
const person2 = {
    name:"amal",
    age:27
}

person.greet.call(person);

const print = person.greet.bind(person)
print()
print()
print()
print()


