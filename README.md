# 📖 Bible Quiz

Bible Quiz ia a fun and interactive quiz game to test your knowledge of the Bible. Answer a series of multiple-choice questions and see how well you score. The game includes sound effects for correct and incorrect answers, a timer for each question, and the ability to mute/unmute the sounds.

 ![Bible Quiz responsive design]<img src="assets/README Images/mockup images.png" alt="Picture of the webpage across different devices">

#  Table of contents
- [Demo](#demo)
* [**User Experience UX**](<#user-experience-ux>)
    *  [User Stories](<#user-stories>)
[**Features**](<#features>)
    * [Start Screen](<#start-screen>)
    * [Questions](<#questions>)
    * [Score](<#score>)
    * [Restart](<#restart>)
    * [Exit](<#exit>)
    * [**Future Features**](<#future-features>)
* [**Technologies Used**](<#technologies-used>)
* [**Testing**](<#testing>)
* [**Deployment**](<#deployment>)
* [**Credits**](<#credits>)
    * [**Content**](<#content>)
    * [**Media**](<#media>)
*  [**Acknowledgements**](<#acknowledgements>)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Credits](#credits)

## Demo

Check out a live demo of the Bible Quiz [https://taiwoogbonyomi.github.io/PP2_bible-quiz/](#).


# User Experience

## User Stories

* As a user, I want clear instructions on how to play the Bible Quiz so that I understand the rules before starting the game.
* As a user, I want to answer a series of randomized questions from the Bible so that each quiz feels different.
* As a user, I want to select an answer from multiple options so that I can participate in the quiz and test my knowledge.
* As a user, I want to see whether my selected answer is correct or incorrect immediately after I answer so that I can learn from my mistakes and know my score as I progress.
* As a user, I want to mute or unmute the sound effects so that I can control the audio based on my environment.
* As a user, I want to see a countdown timer for each question so that I know how much time I have left to answer.
* As a user, I want to see my score at the end of the quiz so that I can know how well I performed.
* As a user, I want to restart the quiz from the end screen so that I can try again and improve my score.
* As a user, I want to exit the quiz and return to the start screen so that I can choose a different activity or restart the quiz later.

[Back to top](<#table-of-contents>)

## Features

- **Multiple-choice Questions**: 10 random questions selected from a pool of 16.
- **Timer**: 15 seconds to answer each question.
- **Sound Effects**: Audio feedback for correct and incorrect answers.
- **Mute/Unmute Button**: Control the sound effects.
- **Score Display**: View your score at the end of the quiz.
- **Responsive Design**: Optimized for both desktop and mobile devices.


### Start Screen

    - Click the "Start" button on the welcome screen.

    <img src="assets/README Images/start-screen (2).png" alt="start screen with a background image and a start button">

### Questions

    - Select one of the four options presented for each question.
    - Each question must be answered within 15 seconds.
    - Use the "Next" button to proceed after answering each question.

    <img src="assets/README Images/questions-screen.png" alt="question screen containing the question, time and the next button">

### Score
### Restart
### Exit 

    - After the last question, your total score will be displayed.
    - Click the "Restart" button to play again.
    - Click the "Exit" button to return to the start screen.

    <img src="assets/README Images/score-screen.png" alt="score, restart and exit button screen">


## Future Features

* Add Difficult levels
    * Easy, Medium, Hard: This would allow users to select a difficulty level, which will determine the complexity of the questions.
* Expand Questions Pool
    * Add more questions to increase the variety and challenge of the quiz.
    * Organize questions into categories (e.g., Old Testament, New Testament, Prophets, Miracles)
* Lifelines
    * Hints: Provide hints for difficult questions.
    * 50/50: Remove two incorrect answers, leaving one correct and one incorrect option.
* Multiplayer Mode
    * Competitive Play: Allow multiple players to compete against each other in real-time.
    * Score Comparison: Compare scores at the end of each round.

[Back to top](<#table-of-contents>)


## Installation

To set up the Bible Quiz locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/taiwoogbonyomi/bible-quiz.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd bible-quiz
    ```

3. **Open `index.html` in your web browser:**

    You can double-click the `index.html` file or use a local server for better performance.

    ```bash
    open index.html
    ```

## Deployment 
The live version of the project is deployed at GitHub pages.

The procedure for deployment followed the "Creating your site" steps provided in [GitHub Docs.](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

1. Log into GitHub.
2. Locate the GitHub Repository that shall be deployed live.
3. At the top of the repository, select Settings from the menu items.
4. Scroll down the Settings page to the ”GitHub Pages" section and click on the ”Check it out here!”
5. At the ”Source” section choose ”main” as Branch and root as folder and click ”Save”
6. The website will deploy and the pages refreshes to provide the live link to the project.

The link can be found here: https://taiwoogbonyomi.github.io/PP2_bible-quiz/



## Technologies Used
## Languages

- HTML
  - Page markup and structuring of the web page.
- CSS
  - Styling and layout.
- JS
  - Javascript code quiz functionality, including question navigation, timing, and score calculation..

## font
- Google Fonts
  - In this project the font _Roboto_ was choosen in [GoogleFonts](https://fonts.google.com/specimen/Roboto)
-The font used is Roboto and san-serif because they are designed to look good on multiple screen sizes.

### Frameworks, Libraries & Programs Used
- Git: Git was used to commit and push the codes to github for storage. 
- [GitPod](https://gitpod.io/): Gitpod was used as the development environment for this project. In order to track development stage and version control, regular commits and pushes to GitHub has been made. The GitPod environment was created using a template provided by Code Institute.
- [GitHub](https://github.com/): Github was used to deploy the site and store the codes. 


### Browser compatibility 
The browsers below were used to test compatibility and there were no issues at all.

- Mozilla Firefox versie 102.0
- Microsoft Edge Versie 103.0.1264.44
-Google Chrome Versie 103.0.5060.114 

## Testing
## User Story Testing
|Goal| execution|
|--------------------------------------------------------------------------------------|-------------------------------------------------------|
| The main goal is to let the user test their bible story knowledge.| The Quiz lets them test their knowledge and restart if they want to try and improve.|
| The user should have good insight in the content when viewing the startpage.| The backgroundimage gives the user a clear sight of what the quiz will be about|
| The user should have an easy accesible button to start the quiz.| The start button is clear and easily visible.|
| The user should receive direct feedback on whether the answer is correct or not.| A clear orange and green color is used for the user to easily see which option was correct.|
| The user should be able to restart the quiz and try to improve.| When the quiz finishes, the user gets a clear Restart button if they wish to try again.|

## manual code testing
### responsiveness
The website is designed to be used on different screen sizes. 
The responsiveness of the website was first tested by chrome developer tools. 
Different breakpoints where used to view the website. 
Next to this the website was viewed on different devices: laptop, tablet and smartphones.

## Validator testing
1. HTML
No errors were found by the official W3C validator

<img src="assets/README Images/W3c html-validator.png" alt="picture of W3C validator result" >


2. CSS
No errors where found by the official Jigsaw validator

<img src="assets/README Images/W3c css-validator.png" alt="picture of Jigsaw validator result" >

3. JSHint 
No errors where found by the official JSHint validator

<img src="assets/README Images/JShint.png" alt="picture of Jigsaw validator results">

3. LIGHTHOUSE
 <img src="assets/README Images/lighthouse.png" alt="Lighthouse result">

 ### Fixed bugs 
- Options not working properly, fixed by changing the display in the option div from inline to block.
- Score and restart screen not showing, fixed by changing their display function from none to block 
- DisplayNext function not properly working, Fixed by extrating the function from local scope to global scope.


### Credits
### Images
- All images were taken from: [Pngegg](https://www.pngegg.com/)

### Codes 
- The basic code used was obtained from a [youtube tutorial from Dear Programmer](https://www.youtube.com/watch?v=WiLTsxjCmWQ&ab_channel=DearProgrammer) with some alterations made .
- I found lots of useful information and codes from the[w3schools](https://www.w3schools.com/) 
- Various parts of the website were inspired by the love math walkthrough project from Code institute 

### Others
- [Mock-up generator](https://techsini.com/multi-mockup/) used to display the site on different screen sizes.