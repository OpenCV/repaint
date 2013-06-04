/* 
 * An array to store the rectangle objects
 */

var myRects = [];

/** Represents a rectangle
 *  @param {integer} x x-coordinate of the rectangle
 *  @param {integer} y y-coordinate of the rectangle
 *  @param {integer} w Width of the rectangle
 *  @param {integer} h Height of the rectangle
 *  @param {string} fill Color of the rectangle
 */
function Rectangle(x, y, w, h, fill) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fill = fill;
}

/**
 * Sets canvas id and clears any previous drawings and draws all the rectangles declared within.
 * @param {string} myCanvasElement canvas id in the html
 *  
 */
Rectangle.associateWithCanvas = function(myCanvasElement) {
    myRects = [];
    canvas = document.getElementById(myCanvasElement);
    context = canvas.getContext('2d');
    Rectangle.clear();
    myRects.push(new Rectangle(10, 10, 20, 20, 'red'));
    myRects.push(new Rectangle(20, 20, 30, 30, 'blue'));
    myRects.push(new Rectangle(30, 10, 20, 20, 'violet'));
    myRects.push(new Rectangle(40, 20, 30, 30, 'black'));
    myRects.push(new Rectangle(50, 30, 40, 40, 'orange'));
    myRects.push(new Rectangle(20, 30, 20, 30, 'green'));
    for(var i in myRects){
        myRects[i].draw();
    }
};

/** 
 * Checks if two rectangles overlap
 * @param {object} rectA First rectangle passed
 * @param {object} rectB Second rectangle passed
 * @returns {boolean} Returns true if the two rectangles else false otherwise
 * */
Rectangle.overlap = function(rectA, rectB){
    return !(rectA.x + rectA.w < rectB.x ||
            rectB.x + rectB.width < rectA.x ||
            rectA.y + rectA.h < rectB.y ||
            rectB.y + rectB.h < rectA.y);
};

/**
 * Clears the canvas by emptying the all pixels
 * 
 **/

Rectangle.clear = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
};

/** To move a rectangle to a different location
 * @argument {integer} x x-coordinate of the target location
 * @argument {integer} y y-coordinate of the target location
 **/
Rectangle.prototype.moveTo = function(x,y){
    
    // Below "if" will check if the current and target coordinates are the same
    if(this.x===x&&this.y===y){
        return "Canvas unchanged with this move.";
    }
    
    this.clearRect();
    // continues if the coordiantes are not the same
    var affectedRects = [];
    for(var i in myRects){
        
        if(this!==myRects[i]){
        if(Rectangle.overlap(this, myRects[i])){
            affectedRects.push(i);
            myRects[i].clearRect();
        }
        }
    }
    
    // Change the object coordinates to the target coordiantes
    this.x = x;
    this.y = y;
    
    // Check if rectangles are overlapping and push overlapping rectangle object's array index to affectedRects.
    for(var i in myRects){
        if(this!==myRects[i]){
        if(Rectangle.overlap(this, myRects[i])){
            affectedRects.push(i);
                myRects[i].clearRect();
        }
        }
        else affectedRects.push(i);
    }
    
    
    
    // Redraw the cleared rectangle objects in the same order as in the array
    affectedRects = unique(affectedRects);
    for(var i in affectedRects){
        console.log(affectedRects[i]);
        myRects[affectedRects[i]].draw();
    }
    affectedRects = [];
};

/**
 * Renders rectangle object on to the canvas
 * 
 */
Rectangle.prototype.draw = function(){
    context = canvas.getContext('2d');
    context.fillStyle = this.fill;
    context.fillRect(this.x, this.y, this.w, this.h);
};

/**
 * Clears rectangle object by filling it with background color 
 */
Rectangle.prototype.clearRect = function(){
    context = canvas.getContext('2d');
    context.fillStyle = 'white';
    context.fillRect(this.x, this.y, this.w, this.h);
};

unique = function(Array) {
    var uniqueArray = [],
        origLen = Array.length,
        found,
        x, y;
        
    for ( x = 0; x < origLen; x++ ) {
        found = undefined;
        for ( y = 0; y < uniqueArray.length; y++ ) {
            if ( Array[x] === uniqueArray[y] ) { 
              found = true;
              break;
            }
        }
        if ( !found) uniqueArray.push( Array[x] );    
    }
    uniqueArray.sort(function(a,b){return a-b;});
   return uniqueArray;
};
