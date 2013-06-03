repaint
=======

##Introduction
_canvas_ is a HTML5 tag which lets us draw graphics usually via scripting(JavaScript).  

Project *repaint* was started at FusionCharts, Bangalore to contribute to the open source community.

The objective of this project is to provide an effective way to move rectangle objects by avoiding complete canvas scene redraw.

_repaint_ will identify the object that needs to be moved and the objects that are getting affected in that process 
and hence will only redraw those objects.

A best case scenario would be when the object movement does not affect other objects in the scene and the 
worst case scenario would be when it affects all the objects in the scene as it needs complete 
redraw of objects.
> An object is said to be affected by another object when an overlap occurs before or after moving a particular object in the current scene

Technical details and goals of this project are documented in *REQUIREMENT.md*.