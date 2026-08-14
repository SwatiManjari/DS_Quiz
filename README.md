# Data Structure Quiz

A simple browser-based quiz application to test knowledge of core data structures implemented in C. Built with plain HTML, CSS, and JavaScript.

## Overview

The quiz walks the user through four stages:

1. **Welcome page** — the user enters their name.
2. **Topic selection** — the user picks one of six data structure topics.
3. **Quiz page** — ten multiple-choice questions are presented one at a time for the selected topic.
4. **Result page** — the final score out of ten is displayed.

## Topics Covered

- Arrays
- Linked List
- Stack
- Queue
- Tree
- Graph

Each topic includes ten questions covering definitions, operations, time complexity, and C-specific implementation details.

## How It Works

- Selecting a topic loads its question set from the `allQuestions` object in `index.js`.
- Clicking an option checks it against the correct answer, highlights it green (correct) or red (incorrect), and automatically advances to the next question after a short delay.
- The score increases by one for each correct answer.
- After all ten questions, the result page displays the user's name and final score.

## Running Locally

1. Clone or download the repository.
2. Open `index.html` directly in a browser, or serve the folder with a local development server (e.g. the VS Code Live Server extension).

## Built With

- HTML5
- CSS3
- JavaScript (vanilla, no frameworks or libraries)

## Possible Improvements

- Add a question counter or progress indicator during the quiz.
- Add a restart button on the result page.
- Store and display high scores using local storage.
- Add more topics and expand each question bank.

## Author

Swati Manjari
GitHub: [SwatiManjari](https://github.com/SwatiManjari)