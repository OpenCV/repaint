repaint
=======

A canvas repaint 
#Introduction
_<canvas>_ is a HTML5 tag which lets us draw graphics usually via scripting(JavaScript).  

Project *repaint* was started at FusionCharts, Bangalore to contribute to the open source community.

The objective of this project is to provide an effective way to move rectangles objects avoiding complete canvas scene redraw.

Canvas repaint is a project will avoid clearing up the canvas and rendering all the objects 
in the scene when only one or few objects need modification.

A best case scenario would be when the object does not affect other objects in the scene and the 
worst case scenario would be when it affects all the objects in the scene as it needs complete 
redraw of objects in the scene.

Technical details and goals of this project are documented in *REQUIREMENT.md*.