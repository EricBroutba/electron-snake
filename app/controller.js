// var globalShortcut = require('global-shortcut');

function Snake (container, posX, posY, mvDir, speed){
    mvDir = (typeof mvDir !== 'undefined') ?  mvDir : "right";
    speed = (typeof speed !== 'undefined') ?  speed : "500";
    this.container = container;
    this.container.style.left = posX;
    this.container.style.top = posY;
    this.direction = mvDir;
    this.speed = speed;
}
Snake.prototype.didWeHitSomething = function(){
    let posX = parseInt(this.container.style.left);
    let posY = parseInt(this.container.style.top);
    let didWe;

    didWe = posX <= 0 ? true : (posX >= window.innerWidth ? true : false);

    didWe = posY <= 0 ? true : (posY >= window.innerHeight ? true : false);
    //return posY >= window.innerHeight ? true : false;
    //console.log(posX <= 0)
    //console.log(posX >= window.innerWidth)
    return didWe;
};
Snake.prototype.mvEvent = function(e){
    switch (e.code) {
        case "ArrowUp":
            // we can't go to the opposite way
            if(this.direction != "down"){
                this.direction = "up";
            }
            break;

        case "ArrowDown":
            if(this.direction != "up"){
                this.direction = "down";
            }
            break;

        case "ArrowRight":
            if(this.direction != "left"){
                this.direction = "right";
            }
            break;

        case "ArrowLeft":
            if(this.direction != "right"){
                this.direction = "left";
            }
            break;
    }
}

Snake.prototype.mvAction = function(){
    // console.log("X : " + this.container.style.left);
    // console.log("Y : " + this.container.style.top);
    console.log(this.didWeHitSomething());


    switch (this.direction){
        case "up":
            this.container.style.top = parseInt(this.container.style.top) - 20;
            break;

        case "down":
            this.container.style.top = parseInt(this.container.style.top) + 20;
            break;

        case "right":
            this.container.style.left = parseInt(this.container.style.left) + 20;
            break;

        case "left":
            this.container.style.left = parseInt(this.container.style.left) - 20;
            break;
    }
}

function initSnake(){

    var snakeBody = document.getElementById("snakeBody");
    var snake = new Snake(snakeBody, 100, 100, null, "300");

    document.onkeydown = snake.mvEvent.bind(snake);
    // credits to http://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-inside-a-callback
    window.setInterval(snake.mvAction.bind(snake), snake.speed);
    //window.setInterval(inter, snake.speed);
}
