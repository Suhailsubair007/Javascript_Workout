function x(y){
    console.log('x called');
    y()
}

x(function(){ //passing function as argument to the x() function
    console.log('anonimous called'); //callback function
})

