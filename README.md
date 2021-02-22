# SmartCow - Task 1
Has 4 components -
  + Navigation Menu : TopBar
  + Side Menu : SideBar
  + Box Container : BoxContainer
    - Input field : Input
    - Boxes with data: Box

Box Container holds the state for the string to be passed to its child components through react context: Input and Box.

The Box component has a method called mapStringToBoxes that returns a list of '\<li>' elements with content in them.

>NOTE: coloring for every 3rd boxed element was done using css:nth-child selector and display was set to grid for box layout.

> AS A TEMPORARY FIX, I'VE USED TEXT FOR SIDEBAR OPENING AND CLOSING WHICH CAN THEN LATER BE SWAPPED FOR AN ICON  

<br>
<br>
<br>

# SmartCow - Task 2
Has 4 components - 
  + Carousel Components Container : Carousel Container
  + Carousel : Carousel
  + Text to be displayed on carousel : TextOnCarousel
  + Sticky Video Player : YoutubeVideo

Carousel was implemented using flickity library.

The plan to make text visible, given that images are dynamic can be achieved using an image color extractor library - in this case, 'rgbaster'.

The library itself does not directly give a contrasting color that goes well with the banner image but instead gives the dominant colour in the image and the colour palette of it. This can then be used to determine which colour MIGHT complement with the banner image.