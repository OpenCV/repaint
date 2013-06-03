/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var myRects = [];

function Rectangle(x, y, w, h, fill) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fill = fill;
}

Rectangle.associateWithCanvas = function(myCanvasElement) {
    myRects = [];
    canvas = document.getElementById(myCanvasElement);
    context = canvas.getContext('2d');
    Rectangle.clear();
    myRects.push(new Rectangle(10, 10, 20, 20, 'red'));
    myRects.push(new Rectangle(20, 20, 30, 30, 'blue'));
    myRects.push(new Rectangle(5, 30, 40, 40, 'green'));
    myRects.push(new Rectangle(30, 10, 20, 20, 'violet'));
    myRects.push(new Rectangle(40, 20, 30, 30, 'black'));
    myRects.push(new Rectangle(50, 30, 40, 40, 'orange'));
    for(var i in myRects){
        myRects[i].draw();
    }
};

Rectangle.clear = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
};

Rectangle.prototype.moveTo = function(x,y){
    var counter = [];
    for(var i in myRects){
        if(!(this.x + this.w < myRects[i].x ||
            myRects[i].x + myRects[i].width < this.x ||
            this.y + this.h < myRects[i].y ||
            myRects[i].y + myRects[i].h < this.y)){
            
                counter.push(i);
                myRects[i].clearRect();
            
        }
    }
    //this.clearRect();
    
    this.x = x;
    this.y = y;
    
    for(var i in myRects){
        if(!(this.x + this.w < myRects[i].x ||
            myRects[i].x + myRects[i].width < this.x ||
            this.y + this.h < myRects[i].y ||
            myRects[i].y + myRects[i].h < this.y)){
            
                counter.push(i);
                myRects[i].clearRect();
            
        }
    }
    
    for(var i in counter){
        console.log(counter[i]);
        myRects[counter[i]].draw();
    }
    counter = [];
    
    //this.draw();
};

Rectangle.prototype.draw = function(){
    context = canvas.getContext('2d');
    context.fillStyle = this.fill;
    context.fillRect(this.x, this.y, this.w, this.h);
};

Rectangle.prototype.clearRect = function(){
    context = canvas.getContext('2d');
    context.fillStyle = 'white';
    context.fillRect(this.x, this.y, this.w, this.h);
};



