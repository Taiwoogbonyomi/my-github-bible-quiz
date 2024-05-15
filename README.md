# 📖 Bible Quiz

Welcome to the Bible Quiz! This web-based quiz application is designed to test and enhance your knowledge of the Bible. Answer multiple choice questions under a time limit and see how well you score!

  <img src="assets/README Images/mockup images.png" alt="Picture of the webpage across different devices">

##  Table of content
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Credits](#credits)

## Demo

Check out a live demo of the Bible Quiz [https://taiwoogbonyomi.github.io/PP2_bible-quiz/](#).

## Features

- 16 thoughtfully curated Bible-related questions.
- Multiple choice answers with real-time feedback.
- Countdown timer for each question.
- Display of final score with an option to restart the quiz.
- Responsive design for all devices.


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



## Usage

1. **Start the Quiz:**

    - Click the "Start" button on the welcome screen.

    <img src="assets/README Images/start-screen.png" alt="start screen with a background image and a start button">

2. **Answer Questions:**

    - Select one of the four options presented for each question.
    - Each question must be answered within 15 seconds.
    - Use the "Next" button to proceed after answering each question.

    <img src="assets/README Images/question-screen.png" alt="question screen containing the question, time and the next button">

3. **View Your Score:**
4. **Restart the Quiz:**

    - After the last question, your total score will be displayed.
    - Click the "Restart" button to play again.

    <img src="assets/README Images/score and restart-screen.png" alt="Score and restart button screen">


## Technologies Used
## Languages

- **HTML**: For structuring the web page.
- **CSS**: For styling and layout.
- **JavaScript**: For quiz functionality, including question navigation, timing, and score calculation.

## font

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