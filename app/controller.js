// var globalShortcut = require('global-shortcut');
console.log("LOADED")
class Snake{
    constructor(container, posX, posY, mvDir){
        this.container = container;
        this.posX = posX;
        this.posY = posY;
        this.mvDir = mvDir;
    }
    mv(e){
        console.log(e.code)
        switch (e.code) {
            case "ArrowUp":
                console.log("UUUUUP");
                break;
            case "ArrowLeft":
                console.log("LEFT");
                break;

            case "ArrowRight":
                console.log("RIGHT");
                break;

            case "ArrowDown":
                console.log("DOWN");
                break;
        }
    }
}

function initSnake(){

    var snakeBody = document.getElementById("snakeBody");
    console.log(snakeBody);
    var snake = new Snake(snakeBody, 50, 50, "right")
    document.onkeydown = snake.mv;
}
