/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function Rectangle(x, y, w, h, fill) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fill = fill;
}

Rectangle.associateWithCanvas = function(myCanvasElement) {
    canvas = document.getElementById(myCanvasElement);
};

Rectangle.prototype.moveTo = function(x,y){
    this.x = x;
    this.y = y;
    clear();
    draw();
};

var myRects = [];

myRects.push(new Rectangle(10, 10, 20, 20, '#ff0000'));
myRects.push(new Rectangle(20, 20, 30, 30, '#00ff00'));
myRects.push(new Rectangle(70, 70, 40, 40, '#0000ff'));
    


//myRects[0].moveTo(90,90);

function draw(){
    context = canvas.getContext('2d');
    for (var i in myRects) {
        objRect = myRects[i];
        context.fillStyle = objRect.fill;
        context.fillRect(objRect.x, objRect.y, objRect.w, objRect.h);
}
};


function clear(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}