function calculateVoloume (length){
    return function(bredth){
        return function(height){
            return length*bredth*height
        }
    }
}

console.log(calculateVoloume(4)(5)(2));
