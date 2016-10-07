# Knights Tour

Simple console with history and redux data flow.

[![Circle CI](https://circleci.com/gh/gacosta89/knightsTour.svg)](https://circleci.com/gh/gacosta89/knightsTour)
## Contents

- [Description](#description)
- [Install](#install)
- [Getting Started](#getting)
- [Screenshots](#screenshots)
- [Thanks](#thanks)

## Live in

[http://gacosta89.github.io/knightsTour](http://gacosta89.github.io/knightsTour)

## Description

A knight's tour is a sequence of moves of a knight on a chessboard such that the knight visits every square only once.
The project is a stand alone web app built with ReactJs and Redux where you can manually move the knight or you can load your algorithm from codepen.

## Install

Clone knightsTour from github

    git clone https://github.com/gacosta89/knightsTour.git
    cd knightsTour
    npm install

## Getting Started

You can either build the project or start the project in dev mode:

Build the project into build directory:

    npm run build
Start the dev mode with hot reloading:

    npm run start

## Usage

To load your algorithm click the Load Solution button, then paste the url of your codepen with the .js extension.
This is my algorithm:

- [http://codepen.io/gacosta89/pen/NxRwpG.js](http://codepen.io/gacosta89/pen/NxRwpG.js)

As you can see you can write ES6 code and then codepen will transpile it to ES5.
The signature of the function that resolves the knights tour should be:

    (() => ({ validateCoords, generateMatrix, updateMatrix }) => {
      return ([x, y]) => ...
    })();

It is an iife that curries two functions, the first gets some utility pure functions (validateCoords, generateMatrix, updateMatrix) and should return
a function that takes the initial position array and returns the 64 moves in an array.

## Screenshots

![Alt text](/source/static/knightsTour.png?raw=true "Knights Tour")

## Thanks

- [Eric Eliott](https://medium.com/@_ericelliott)
- [redux](https://reduxframework.com/)
- [reactjs](https://facebook.github.io/react/)
