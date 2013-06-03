repaint requirements
====================


**Target release:**
1.0

**Document status:**
* Reviewed by _Shamasis_
* Revised by _N Bhargav_

**Updated on**
June 3rd 2013

**Designer:**
* _N Bhargav_

**Developers:**  
* _N Bhargav_  
* _Shamasis_  
* _Sushanth_

**QA :**  
* _N Bhargav_  
* _Shamasis_  
* _Sushanth_  

##Goals  

The major goal of this project(_repaint_) is to optimize rendering of a _canvas_ when any of the object in the canvas needs to be moved.

This can done by using the following algorithm.
  
1. Select the target canvas element id  
2. Push all the rectangle objects that needs to be rendered to an array so that an order can be maintained  
3. Draw all the rectangle objects by the order followed in the array hence the last object rendered will be on the top of other objects  
4. Select the rectangle object that needs to be moved and the new location coordinates (x,y)  
5. Find all the rectangles that are overlapping with the target object(Say Rectangle1)
    1. To find the rectangles that are overlapping with Rectangle1 we need to add the x-coordinate, it's width and y-coordinate, it's height for all the rectangles.  
    2. Two rectangles are said to be not overlapping when any of the below cases are _true_  
        + Rectangle1(x)+Rectangle1(w) < Rectangle2(x) _or_  
          Rectangle2(x)+Rectangle2(w) < Rectangle1(x) _or_  
          Rectangle1(y)+rectangle1(h) < Rectangle2(y) _or_  
          Rectangle2(y)+Rectangle2(h) < Rectangle1(y)  
    3. Change Rectangle1's coordinates to the target coordinates and repeat _step 2_  
    4. For each case where above condition is not satisfied, clear the Rectangle2 by filling it with the background color and get the array index of those rectangles and store them in another array, lets say _counter_  
    5. Repeat this for all rectangles and clear the target rectangle in the same way as above  
    6. Draw all the rectangles in the order of their index we stored in _counter_ array  

> In the console, the syntax to perform a move is RectangleObject.moveTo(x,y); Hence this will give the array index of the object and the new location coordinates.
In the algorithm explained _x, y, w, h_ means the _x-coordinate, y-coordinate, width_ and _height_ of the rectangle

> Notes:
A canvas let's us build 2D shapes which are scriptable and dynamic. It is a
low level, procedural model that updates a bitmap and does not have a built-in scene graph.