# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Muhammed Suleman Thaniana

Time spent: **9** hours spent in total

Link to project:[My project](https://glitch.com/edit/#!/translucent-opaque-twilight)

Link to live site: [My site](https://translucent-opaque-twilight.glitch.me)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/FUtcHo3.gif)

![](https://i.imgur.com/Wj16d2p.gif)

![](https://i.imgur.com/iCzim9m.gif)

![](https://i.imgur.com/5hcTsgk.gif)




## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.  

-  w3schools.com for colors and some other methods.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)     


One challenge I faced when completing this submission came when I was doing the optional part, creating a random pattern. There were two things I had to do for this part:
* create a new list with a randomly generated pattern
* call this new list in other functions part of the javascript file  


The first challenge I faced was when creating the list. In python I have learnt that elements can be added to a list using the append list method, but 
unfortunately this method did not work in javascript. Since I realised that list methods worked differently in javascript I decided to go over its details. 
So I used the w3schools website to learn about lists in javascript which showed me that lists in javascript are not that different from python alongside 
introducing me to the list.push method which I used for my function. The next challenge here that I faced was that even after creating the pattern in the 
startgame function using my createpattern function other functions were not working. To see what was going wrong I first put in some consolelog commands and 
figured that there was no pattern list defined in other functions. This made me realise after going over the code a couple times that my method was creating the 
list inside a function and hence it was not globally defined. To solve this problem I once again went through documentation online to see all possible solutions
and figured that to solve this the best method is to just define the variable outside the function ie globally and then edit it inside a function. Which causes
it to be globally defined and hence seen by all functions. 


So I guess as mentioned above, similar to how I overcome every other programming problem I searched up and read resources online and looked through some
examples to learn how similar problems are solved and then used that to solve my issue.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)   

This pre work was truly an excellent experience because it was fun, accomplishing and an excellent learning opportunity. But eventhough the website created
was reactive it clearly was not near the websites I am used to visiting. For example amazon, youtube, facebook etcetra. So my questions mainly concern 
how do we go from this Color game to websites like facebook which have so much more. Like how do messenger and video chats work, how can facebook show
so many different things on its feed and have a well divided format with the page divided into so many parts and how does it save and access such large
amounts of data on the click of a finger. So I guess my question is whether they just scale up what we have done in the pre work or is there more?
In the same connection I also would love to know how harder and more complicated online games are made like minecraft.  

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)   

One thing I would really love to implement is the optional timer feature, ie give the user limited time to do their turn. I struggled in implementing this due 
to the timer positioning in the code. I tried for a couple hours but given more time I would love to work on this and get it working.


One feature I would love to add is to have variable levels of difficulty that could be chosen by the user, this would affect the speed, the number of boxes
and the length of the pattern. A nice way to implement this would be to start at a central home page where we would select the difficulty after which the user 
would be guided to the game page, with the correct number of squares on the page. This I believe could be done through the strategies learned in the pre work.

To further enhance this game picking up from my implementation of using animals other things like alphabets numbers could be used for kids and maybe things 
like alphabets, words etcetra could be added for adults trying to learn something new. The homepage a I have described above could be used to choose which 
one we want to choose.

Another good practice and chance to learn react would be to do the same thing using react, which I believe would combine the html and javascript files.


Given more time I would also love to make this game on actual hardware like the simon toy. This would be beneficial in that I would have to write the same
code in either C or HDL to get this onto some microcontroller or microprocessor. It would actually be a nice arduino project.



## License

    Copyright Muhammed Suleman Thaniana

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
