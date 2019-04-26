function countBs(string){
    var count = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] === 'B'){
            count++;
        }
    }
    return count;
}

function countChar(string, character){
    var count = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] === character){
            count++;
        }
    }
    return count;
}

console.log(countBs('BalzakBarBaar'));
console.log(countChar('krokantekrekelkaars', 'k'));