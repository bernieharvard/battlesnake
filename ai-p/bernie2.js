// function noReturn(directioni, nextDirection){
//     if (direction != nextDirection){
//         return nextDirection
//     }
//     if (direction ==="u") && nextDirection === "d") {
//         return "u";
//     }
// }

function bernie2_getDirection(gridSize,snake,apples,direction){
    let apple = indexToColRow(apples[0])
    let snakehead = indexToColRow(snake[0])
    var col = snakehead[0];
    var row = snakehead[1];
    if (col === 0 ){
        if (row === 1){
            return "r";
        }
        else if (row > 1){
            return "u";
        }    
    }
    else if (col > 0 && row < 2){
        if (row === 0){
            
            if (col === gridSize-1){
                return "d";
            }
            else if (col % 2 === 0){
                return "d";
            }
            else{
                return "r";
            }
        }
        else{
            if (col === gridSize-1){
                return "d";
            }
            else if (col % 2 === 0){
                return "r"
            }
            else{
                return "u";
            }
        }
    }
    else if (col > 0 && row > 1) {
        if (row === gridSize-1){
            return "l";
        }
        else if (col === 1 && row % 2 === 0){
            return "d";
        }
        else if (col > 1 && row % 2 === 0){
            return "l";
        }
        else if (col === gridSize-1 && row % 2 === 1){
            return "d";
        }
        else if (col < gridSize-1 && row % 2 === 1){
            return "r";
        }
    }
}
    // if (apple[0] < snakehead[0]){
    //     if (snake.includes(snake[0]-gridSize) ){
    //         if (direction ==="r"){
    //             return "r";
    //         }
    //         return "l";    
    //     }
    //     return 'u';
    // }else if (apple[0] > snakehead[0]){
        
    //     if (snake.includes(snake[0]+gridSize) ){
    //         if (direction ==="r"){
    //             return "r";
    //         }
    //         return "l";    
    //     }
    //     return 'd'
    // }else if (apple[1] < snakehead[1]){
    //     if (snake.includes(snake[0]-1) ){
    //         if (direction ==="u"){
    //             return "u";
    //         }
    //         return "d";    
    //     }
    //     return 'l';
    // }else if (apple[1] > snakehead[1]){
    //     if (snake.includes(snake[0]+1) ){
    //         if (direction ==="u"){
    //             return "u";
    //         }
    //         return "d"; 
    //     }
    //     return 'r';
    // }else{
    //     return direction;

    // }

    //}
    
    // if (direction == "l") {
    //     return "u";
    // }else if (direction == "d") {
    //     return "l";
    // }else if (direction == "r") {
    //     return "d";
    // }else if (direction == "u") {
    //     return "r";
    // }


function bernie2_newGame(){
    return;
}

ais['bernie2'] = {
    getDirection: bernie2_getDirection,
    newGame: bernie2_newGame
};