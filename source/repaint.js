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

// get canvas element.
var elem = document.getElementById('myCanvas');

// check if context exist
if (elem.getContext) {

    var myRects = [];

    myRects.push(new Rectangle(10, 10, 10, 20, "red"));
    myRects.push(new Rectangle(0, 20, 20, 30, "blue"));
    myRects.push(new Rectangle(40, 40, 30, 40, "green"));

    context = elem.getContext('2d');
    for (var i in myRects) {
        objRect = myRects[i];
        context.fillStyle = objRect.fill;
        context.fillRect(objRect.x, objRect.y, objRect.w, objRect.h);

    }

}