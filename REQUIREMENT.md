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

_canvas_ is a HTML5 tag which lets us draw graphics usually via scripting, which is JavaScript in this project.  

Project *repaint* was started at FusionCharts, Bangalore to contribute to the opensource community.

The objective of this project is to provide an easy way to create, color and move 
rectangles.  

> Notes:
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