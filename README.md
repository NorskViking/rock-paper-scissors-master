![issues-open](https://img.shields.io/github/issues/NorskViking/rock-paper-scissors-master.svg) ![issues-closed](https://img.shields.io/github/issues-closed/NorskViking/rock-paper-scissors-master.svg) ![pull-open](https://img.shields.io/github/issues-pr/NorskViking/rock-paper-scissors-master.svg) ![pull-closed](https://img.shields.io/github/issues-pr-closed/NorskViking/rock-paper-scissors-master.svg)<br>
![vscode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) ![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [ToDo](#todo)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

![mobile](./src/assets/screenshots/rps_mobile.png)

### Links

- Solution URL: [Solution](https://github.com/NorskViking/rock-paper-scissors-master)
- Live Site URL: [Try the game](https://norskviking.github.io/rock-paper-scissors-master/)

### Known bugs

- When deploying the game on gh-pages, only blank screen is displayed.
- On computer win, shadow-rings is placed over player-choice display, even though player-choice should have z-index 70 and computer-choice z-index 0
- In 'Rock, Paper, Scissor, Spock, Lizard' gamemode, the 'rock'-button have missing pointer area in the middle, making the player have to click the outer edges to choose 'rock', unknown why this is.

### ToDo

- [ ] Deploy to Github-pages via my portfolio website
- [x] Implement a Rock, Paper, Scissor, Spock & Lizard version
- [ ] Implement function for changing between RPS & RPSSL
- [x] Add home to portfolio button
- [ ] Optimize Components for use in the different game-modes

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - For styles
- Github Actions - for continuos deployment

### What I learned

During this project I've been able to deepen my knowledge of Typescript, and learned how to use TailwindCSS for styling my components. 


### Continued development

In the future I plan on keep deepening my knowledge in Typescript and Tailwind, and the Javascript framework in general. I have some fullstack PERN projects in mind, where I will make use of freely available RestAPI's. 

### Useful resources

- [tailwindcss.org](https://tailwindcss.com/) - The documentation is well written and easy to understand, which made it easy for me to learn how to use it for styling.
- [geeksforgeeks.org](https://www.geeksforgeeks.org) - They have many well written guides and articles, that help me when I got stuck in places. One of their articles helped me solve a problem I had with z-index not seemingly working as intended.


## Author

- Website - [Jørgen S. Baumann](https://norskviking.github.io/portfolio/)
- Frontend Mentor - [@NorskViking](https://www.frontendmentor.io/profile/NorskViking)
