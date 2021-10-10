// function noReturn(directioni, nextDirection){
//     if (direction != nextDirection){
//         return nextDirection
//     }
//     if (direction ==="u") && nextDirection === "d") {
//         return "u";
//     }
// }

function bernie_getDirection(gridSize,snake,apples,direction){
    let apple = indexToColRow(apples[0])
    let snakehead = indexToColRow(snake[0])
    if (apple[0] < snakehead[0]){
        if (snake.includes(snake[0]-gridSize) ){
            if (direction ==="r"){
                return "r";
            }
            return "l";    
        }
        return 'u';
    }else if (apple[0] > snakehead[0]){
        
        if (snake.includes(snake[0]+gridSize) ){
            if (direction ==="r"){
                return "r";
            }
            return "l";    
        }
        return 'd'
    }else if (apple[1] < snakehead[1]){
        if (snake.includes(snake[0]-1) ){
            if (direction ==="u"){
                return "u";
            }
            return "d";    
        }
        return 'l';
    }else if (apple[1] > snakehead[1]){
        if (snake.includes(snake[0]+1) ){
            if (direction ==="u"){
                return "u";
            }
            return "d"; 
        }
        return 'r';
    }else{
        return direction;

    }

}
    
    // if (direction == "l") {
    //     return "u";
    // }else if (direction == "d") {
    //     return "l";
    // }else if (direction == "r") {
    //     return "d";
    // }else if (direction == "u") {
    //     return "r";
    // }


function bernie_newGame(){
    return;
}

ais['bernie'] = {
    getDirection: bernie_getDirection,
    newGame: bernie_newGame
};