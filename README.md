<img width="1306" height="733" alt="Screenshot 2025-08-20 at 09 59 50" src="https://github.com/user-attachments/assets/176c3497-c9c4-436d-9671-a7cc0130349a" />

# Online Quiz App

## An online trivia quiz with a selection of general knowledge questions

A simple react app that includes an introductory 'How To' page describing the function of the app followed by a series of general knowledge trivia questions. You are able to select the answer which will reveal if your choice is correct or incorrect. You get to the next question by selecting the 'Next' button. Once all th questions have been answered the last page will reveal your score and give the option of resestting the quiz.

## First time visitor goals
 * As a first time visitor, I want to be able to see a simple layout that isn't over stimulating and overwhelming to look at
 * As a first time visitor, I want to be able to easily understand the purpose of the quiz app and how it works
 * As a first time visitor, I want to be able to easily navigate and see my progress throughout the quiz
 * As a first time visitor, I want to be able to have a responsive screen so I can use on my phone or tablet

## Returning Visitor Goals:
 * As a returning visitor, I want to try my luck again to see if I can improve my score.
 * As a returning visitor, I want to see the same familiar game layout so I can get straight into a new game.
 * As a returning visitor, I want to test my knowledge again but not have the exact same experience again otherwise I'll just memorize the questions.

## Target Audience Is:
 * Interested in Quizzes.
 * Interested in general knowledge.
 * Interested in brain training.
 * Interested in fun.

## Features of the App

### The website exists on one page only with multiple features visible to the user:

<img width="851" height="558" alt="Screenshot 2025-08-20 at 10 21 43" src="https://github.com/user-attachments/assets/e3337c8c-a688-4a85-a690-ac76a5b2f38a" />

 * An introductory how to page explaining how to play the quiz

<img width="250" height="111" alt="Screenshot 2025-08-20 at 10 00 26" src="https://github.com/user-attachments/assets/38fb523b-b97b-47ef-82f0-7c596cebdd4c" />

 * A start button that changes color on hover to take you to the first question
  
<img width="844" height="568" alt="Screenshot 2025-08-20 at 10 00 44" src="https://github.com/user-attachments/assets/fea13c51-fb48-4912-a022-62165a459efa" />

 * individual questions with a set of multiple choice answers

<img width="748" height="262" alt="Screenshot 2025-08-20 at 10 01 07" src="https://github.com/user-attachments/assets/0993c4fc-d2f7-451c-9c96-527df9113769" />

 * when selected the answer turns green if correct

<img width="749" height="260" alt="Screenshot 2025-08-20 at 10 01 22" src="https://github.com/user-attachments/assets/06b6d70a-1f9f-4d80-8c74-d0ec28aa5edc" />

 * when selected the answer turns red if incorrect

<img width="183" height="36" alt="Screenshot 2025-08-20 at 10 01 27" src="https://github.com/user-attachments/assets/74873c3e-be18-46f0-b298-2400af4381a1" />

 * a count is shown at the bottom to mark your progess in the quiz

<img width="875" height="272" alt="Screenshot 2025-08-20 at 10 01 44" src="https://github.com/user-attachments/assets/6fe94eda-b9fb-448a-9f03-f1034870d12b" />

 * The final screen reveals your total score and a reset button to take you back to the beginning of the quiz

<img width="470" height="721" alt="Screenshot 2025-08-20 at 10 03 32" src="https://github.com/user-attachments/assets/95566227-2d1f-4836-ac18-ef2a07c3c8ac" />

 * the screen is responsive allowing you to clearly view the app on different size browsers and devices

## Testing

### Lighthouse Report

[lighthouse report.html](https://github.com/user-attachments/files/22091736/lighthouse.report.html)

<img width="464" height="97" alt="Screenshot 2025-09-02 at 11 00 00" src="https://github.com/user-attachments/assets/c819a0d6-4583-47a5-a42a-9a0ec46f59b9" />

<img width="269" height="96" alt="Screenshot 2025-08-20 at 10 06 44" src="https://github.com/user-attachments/assets/da4becd4-92ca-4335-b6b8-8e829f9d2dd9" />

<img width="320" height="144" alt="Screenshot 2025-09-02 at 10 53 56" src="https://github.com/user-attachments/assets/6094e2ad-f49c-409a-aed6-26ccd68d1696" />

 * Accessibility marked low: Background and foreground colors do not have a sufficient contrast ratio and Heading elements are not in a sequentially-descending order


[lighthouse report updated.html](https://github.com/user-attachments/files/22092469/lighthouse.report.updated.html)


<img width="474" height="105" alt="Screenshot 2025-09-02 at 11 03 52" src="https://github.com/user-attachments/assets/7c357317-71e2-4f40-8b59-d2809485d8f1" />

 * Issues fixed by increasing contrast in colours in button element
 * Issues fixed by switching H3 element to H2


## Deployment
### The react site was deployed via vs code. The steps to deploy are as follows:

 * The scripts "predeploy": "npm run build", "deploy": "gh-pages -d build" were added to package.json
 * the url link was added as the "homepage" in package.json
 * "npm run build" was run in the terminal to deploy the site
The live link can be found at [https://jessiehalldev.github.io/online-quiz/]


