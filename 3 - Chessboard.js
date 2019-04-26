var size = 8; //Width and height of the chessboard. Equal dimensions.
var output = ''; //String for adding the characters.

for (let height = 0; height < size; height++){ //Check de height of the chessboard
    for (let width = 0; width < size; width++){ //Check the width of the chessboard.
        if ((width + height) % 2 == 0){ //width is equal
            output += ' '; //add a space.
        } else { //width is inequal
            output += '#'; //add a hashtag.
        }
    }
    output  += '\n'; //add a linebreak.
}

console.log(output); //Output the chessboard to the console.