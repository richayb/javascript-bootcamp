for(var i = 0; i < 100; i++){ //Loop and count up to 100
    var output = ''; //Empty output string
    if (i % 3 == 0 && i % 5 == 0){ //Current count number is divisible by 3 and 5
        output += 'FizzBuzz';
    } else if (i % 3 == 0){ //Current count number is divisible by 3
        output += 'Fizz';
    } else if (i % 5 == 0){ //Current count number is divisible by 5
        output += 'Buzz';
    }
    console.log(output || i); //Output string if there is any, otherwise output the current count number
}