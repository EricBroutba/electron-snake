// var globalShortcut = require('global-shortcut');
function Snake (container, mvDir, speed){
    mvDir = (typeof mvDir !== 'undefined') ?  mvDir : "right";
    speed = (typeof speed !== 'undefined') ?  speed : "500";
    this.container = container;
    this.posX = 100;
    this.posY = 100;
    this.height = this.container.clientHeight;
    this.width = this.container.clientWidth;
    this.container.style.left = this.posX;
    this.container.style.top = this.posY;
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

    let foodElement = document.createElement("div");
    foodElement.setAttribute("id", "apple");

    let foodPosX;
    do{
        foodPosX = Math.floor(Math.random(0, window.innerHeight)*10)*20
    }while(foodPosX % this.height != 0)

    let foodPosY;
    do{
        foodPosY = Math.floor(Math.random(0, window.innerWidth)*10)*20
    }while(foodPosY % this.width != 0)

    this.foodPosX = foodPosX;
    this.foodPosY = foodPosY;
    foodElement.style.left = foodPosX;
    foodElement.style.top = foodPosY;
    foodElement.style.position = "fixed";
    foodElement.style.width = "20px";
    foodElement.style.height = "20px";
    foodElement.style.backgroundColor = "red";
    foodElement.style.verticalAlign = "top";

    document.body.appendChild(foodElement);

}
Snake.prototype.didWeHitAWall = function(){
    let posX = parseInt(this.container.style.left);
    let posY = parseInt(this.container.style.top);
    let weDid;

    //TODO precisions with window.innerWidth and windown.innerHeight

    weDid = posX < 0 ? true : (posX >= window.innerWidth ? true : false);
    if(weDid){ return true; }

    weDid = posY < 0 ? true : (posY >= window.innerHeight ? true : false);
    if(weDid){ return true; }

    return false;
};

Snake.prototype.didWeAte = function(){

    var grow = x => f => {
        if(x>0){
            f()
            grow(x-1)(f)
        }
    }


    if((this.posX == this.foodPosX) && (this.posY == this.foodPosY)){
        this.snakeLength += 1;
        console.log("DAAAAM")
        grow(3)(() => function(){
            console.log("hi")
        });
    }else{
        console.log("no");
        console.log(this.posX)
        console.log("== +" + this.foodPosX)
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
    let newPos;
    switch (this.direction){
        case "up":
            newPos = this.posX - 20;
            this.container.style.top = newPos;
            this.posX = newPos;
            console.log(newPos);
            break;

        case "down":
            newPos = this.posX + 20;
            this.container.style.top = newPos;
            this.posX = newPos;
            break;

        case "right":
            newPos = this.posY + 20;
            this.container.style.left = newPos;
            this.posY = newPos;
            break;

        case "left":
            newPos = this.posY - 20;
            this.container.style.left = newPos;
            this.posY = newPos;
            break;
    }

    if (this.didWeHitAWall()){
        console.log("GAME OVER");
    }
    this.didWeAte();
}

function initSnake(){

    var snakeBody = document.getElementById("snakeBody");
    var snake = new Snake(snakeBody, null, "300");


    document.onkeydown = snake.mvEvent.bind(snake);
    // credits to http://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-inside-a-callback
    window.setInterval(snake.mvAction.bind(snake), snake.speed);
    //window.setInterval(inter, snake.speed);
}
