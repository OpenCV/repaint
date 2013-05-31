repaint requirements
====================


**Target release:**
1.0

**Theme:**
NA

**Document status:**
Draft

**Designer:**
N Bhargav

**Developers:**  
* N Bhargav  
* Shamasis  
* Sushanth

**QA :**  
* N Bhargav  
* Shamasis  
* Sushanth  

##Goals  

The objective of this project is to build a canvas and provide neat way to create, color, move 
rectangles.  
**Notes:**
A canvas let's us build 2D shapes which are scriptable and dynamic. It is a
low level, procedural model that updates a bitmap and does not have a built-in scene graph.

First goal is to implement the interface using the JS console.
Operations that can be done are  
* Create a rectangle objects on the canvas with (x,y)->origin, width, height and color  
    + Objects shall follow an order like in a stack where the latest object created will be on the top of all the created before this object.  

Second goal is to  
* Create a method to move the rectangle object by providing the destination parameters (x,y)
    + Erasing the object front the current location along with other objects that overlap with current object that needs to be moved
        - Update the new (x,y) parameters for the object that needs to be moved
    + Erasing the overlapping objects at the new location
    + Redraw the new objects by order