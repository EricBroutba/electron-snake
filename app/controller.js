// var globalShortcut = require('global-shortcut');
function Snake (container, posX, posY, mvDir, speed){
    mvDir = (typeof mvDir !== 'undefined') ?  mvDir : "right";
    speed = (typeof speed !== 'undefined') ?  speed : "500";
    this.container = container;
    posX = 100;
    posY = 100;
    this.container.style.left = posX;
    this.container.style.top = posY;
    this.direction = mvDir;
    this.speed = speed;
    this.snakeLength = 1;
    this.generateFood();

}

Snake.prototype.generateFood = function(){
    if(document.contains(document.getElementById("apple"))){
        console.log("REMOVING FOOD")
        document.getElementById("apple").remove();
    }

    var foodElement = document.createElement("div");
    foodElement.setAttribute("id", "apple");
    foodElement.style.position = "absolute";


    let foodPosX = Math.floor(Math.random(0, window.innerHeight)*10)*20;
    let foodPosY = Math.floor(Math.random(0, window.innerWidth)*10)*20;
    foodPosX = 100;
    foodPosY = 100;
    this.foodPosX = foodPosX;
    this.foodPosY = foodPosY;
    foodElement.style.left = foodPosX;
    foodElement.style.top = foodPosY;

    foodElement.style.width = "20px";
    foodElement.style.height = "20px";
    foodElement.style.backgroundColor = "red";

    document.body.appendChild(foodElement);

}
Snake.prototype.didWeHitAWall = function(){
    let posX = parseInt(this.container.style.left);
    let posY = parseInt(this.container.style.top);
    let weDid;

    //TODO precisions with window.innerWidth and windown.innerHeight

    weDid = posX <= 0 ? true : (posX >= window.innerWidth ? true : false);
    if(weDid){
        return true;
    }
    weDid = posY <= 0 ? true : (posY >= window.innerHeight ? true : false);
    if(weDid){
        return true;
    }

    return false;
};
Snake.prototype.didWeAte = function(){

    let posX = parseInt(this.container.style.left);
    let posY = parseInt(this.container.style.top);

    if((posX == this.foodPosX) && (posY == this.foodPosY)){
        this.snakeLength += 1;
        console.log("WE JUST ATE")

        console.log("YYY")
        console.log(posY);
        console.log(this.foodPosY);
        console.log("XXX")
        console.log(posX)
        console.log(this.foodPosY)

    }
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

    if (this.didWeHitAWall()){
        console.log("GAME OVER");
    }
    this.didWeAte();


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
