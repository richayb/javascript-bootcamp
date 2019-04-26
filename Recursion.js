function isEven(n){
    if (n == 0){ //Value is 0
        return true;
    } else if (n == 1){ //Value is 1
        return false;
    } else {
        return isEven(n - 2); //Subtract 2 and loop the function if the value is not 0 or 1.
    }
}

console.log(isEven(50));