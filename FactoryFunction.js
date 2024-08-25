// function cretePerson (name,age) {
//     return {
//         name,
//         age,
//         greet() {
//             console.log(`Hi my name is ${name} and age is ${age}`);
//         }
//     }
// } 


// const john = cretePerson('suhail',34)
// console.log(john.name);
// console.log(john.age);
// john.greet();


function greeting(name,age){
    return {
        name,
        age,
        greet() {
            console.log(`HI ${name} you are ${age}`);
        }
    }
}

const person = greeting('suhail',23)
console.log(person.name);
console.log(person.age);
console.log(person);