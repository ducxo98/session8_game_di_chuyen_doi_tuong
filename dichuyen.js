function Hero(image,top,left,size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size=size;
    this.getHeroElement = function () {
        return '<img width="'+ this.size+'"'+
            'height="'+this.size+'"'+
            'src="'+this.image+'"'+
            'style="top:'+this.top+'px;left:'+this.left+'px;position:absolute;"/>';
        
    }
    this.moveRight=function () {
        this.left +=1;
    }
    this.moveDown=function () {
        this.top+=1;
     }
    this.moveleft=function () {
         this.left-=1;
     }
     this.moveUp=function (){
         this.top -=1;
     }

}
let hero= new Hero('traidat.png',1,1,200);
function start() {
    if((hero.left<window.innerWidth- hero.size) &&( hero.top===1)){
        hero.moveRight()
    }
   if((hero.left===window.innerWidth- hero.size) && (hero.top<window.innerHeight-hero.size)){
        hero.moveDown()
    }
    if((hero.top ===window.innerHeight- hero.size)&&(hero.left >=1)){
        hero.moveleft()
    }
    if((hero.left===1)&&(hero.top >1)){
         hero.moveUp()
     }
       document.getElementById('game').innerHTML=hero.getHeroElement()
    setTimeout(start,5)

}
start();