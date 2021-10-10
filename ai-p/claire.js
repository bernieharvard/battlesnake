function indexToColRow(index) {
    return [ int(index / gridSize) , index % gridSize];
}

function colRowToIndex(col, row) {
    return row * gridSize + col;
}

function claire_getDirection(gridSize,snake,apples,direction){ 
    let apple = indexToColRow(apples[0]);
    let snakeHead = indexToColRow(snake[0]);

    if (apple[0] < snakeHead[0]){
        if ( snake.includes( snake[0] - gridSize) ){
            if (direction === "r"){
                return "r";
            }
            return "l";
        }
        return 'u';
    }else if (apple[0] > snakeHead[0]){
        if ( snake.includes( snake[0] + gridSize) ){
            if (direction === "r"){
                return "r";
            }
            return "l";
        }
        return 'd';
    }else if (apple[1] < snakeHead[1]){
        if ( snake.includes( snake[0] - 1) ){
            if (direction === "d"){
                return "d";
            }
            return "u";
        }
        return 'l';
    }else if (apple[1] > snakeHead[1]){
        if ( snake.includes( snake[0] + 1) ){
            if (direction === "d"){
                return "d";
            }
            return "u";
        }
        return 'r';
    }else{
        return direction;
    }
}

function claire_newGame(){
    return;
}

ais['claire'] = {
    getDirection: claire_getDirection,
    newGame: claire_newGame
};