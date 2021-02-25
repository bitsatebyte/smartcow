<img src="https://smartcow.ai/staticfiles/images/horiz-logo-yellow.png" alt="smartcow" width="200"/>

## SmartCow - Task 1
Has 4 components -
  + Navigation Menu : ***TopBar***
  + Side Menu : ***SideBar***
  + Box Container : ***BoxContainer***
    - Input field : ***Input***
    - Boxes with data : ***Box***

Box Container holds the state for the string to be passed to its child components through react context: Input and Box.

The Box component has a method called mapStringToBoxes that returns a list of '\<li>' elements with content in them.

>NOTE: coloring for every 3rd boxed element was done using css:nth-child selector and display was set to grid for box layout.

> AS A TEMPORARY FIX, I'VE USED TEXT FOR SIDEBAR OPENING AND CLOSING WHICH CAN THEN LATER BE SWAPPED FOR AN ICON  

<br>

## SmartCow - Task 2
Has 4 components - 
  + Carousel Components Container : Carousel Container
  + Carousel : Carousel
  + Text to be displayed on carousel : TextOnCarousel
  + Sticky Video Player : YoutubeVideo

Carousel was implemented using flickity library.

Image's brightness was dimmed to 50% and then white text overlay  
was used to make text legible on dynamic images.
