function Hero(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXcSTLAKs64aeZpmtHAlomdyfKhppYMkteLA&usqp=CAU" width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += this.speed;
        console.log('ok: ' + this.left);
    }

    this.moveLeft = function(){
        this.left -= this.speed;
        console.log('ok: ' + this.left);
    }

    this.moveTop = function(){
        this.top -= this.speed;
        console.log('ok: ' + this.top);
    }

    this.moveDown = function(){
        this.top += this.speed;
        console.log('ok: ' + this.top);
    }

}

let speed = +prompt('Enter a number:')
    let hero = new Hero('superman.png', 0, 0, 200, speed);


function start(){
    if(hero.top === 0 && hero.left < 1700 - hero.size){
        hero.moveRight();
    } else if (hero.top < 850 - hero.size && hero.left >= 1700 - hero.size ) {
        hero.moveDown();
    } else if (hero.left > 0) {
        hero.moveLeft()
    } else if (hero.top > 0) {
        hero.moveTop()
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();