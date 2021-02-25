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

<br>

## Tests
Tests for UI components cannot be unit tested. For those that could be, tests have been written.  

For container components, only render tests have been written to check if they render successfully.

| File                             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| -------------------------------- | ------- | -------- | ------- | ------- | ----------------- |
| All files                        | 64.15   | 20       | 68.18   | 63.46   |
| src                              | 16.67   | 0        | 33.33   | 16.67   |
| App.js                           | 100     | 100      | 100     | 100     |
| index.js                         | 0       | 100      | 100     | 0       | 7-14              |
| reportWebVitals.js               | 0       | 0        | 0       | 0       | 1-8               |
| src/components/Box               | 100     | 100      | 100     | 100     |
| Box.js                           | 100     | 100      | 100     | 100     |
| src/components/BoxContainer      | 100     | 100      | 100     | 100     |
| BoxContainer.js                  | 100     | 100      | 100     | 100     |
| CardContext.js                   | 100     | 100      | 100     | 100     |
| src/components/Carousel          | 80      | 100      | 75      | 80      |
| Carousel.js                      | 80      | 100      | 75      | 80      | 29-30             |
| src/components/CarouselContainer | 0       | 100      | 0       | 0       |
| CarouselContainer.js             | 0       | 100      | 0       | 0       | 8                 |
| src/components/Home              | 100     | 100      | 100     | 100     |
| Home.js                          | 100     | 100      | 100     | 100     |
| src/components/Input             | 100     | 100      | 100     | 100     |
| Input.js                         | 100     | 100      | 100     | 100     |
| src/components/SideBar           | 40      | 0        | 25      | 40      |
| SideBar.js                       | 40      | 0        | 25      | 40      | 7-8,12-13,17-18   |
| src/components/TextOnCarousel    | 100     | 100      | 100     | 100     |
| TextOnCarousel.js                | 100     | 100      | 100     | 100     |
| src/components/TopBar            | 100     | 100      | 100     | 100     |
| TopBar.js                        | 100     | 100      | 100     | 100     |
| src/components/YoutubeVideo      | 100     | 100      | 100     | 100     |
| YoutubeVideo.js                  | 100     | 100      | 100     | 100     |
