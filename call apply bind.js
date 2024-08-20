const person ={
    name:"suhail",
    age:22,
};
const person2 = {
    name:"amal",
    age:27
}


function printFullname(){
    console.log(`This is your name ${this.name} and you are ${this.age} years old`);
}


printFullname.call(person);
printFullname.call(person2);

const printFullNameFunction = printFullname.bind(person);
printFullNameFunction();
printFullNameFunction();