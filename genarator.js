function* simple(){
    yield 1
    yield 2
    yield 3
}

const a = simple()
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());