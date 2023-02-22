let app = document.getElementById('app');

// Created title for the game 

let header = document.createElement('TIC-TAC-TOE')
header.setAttribute('class', "header");
header.textContent = 'TIC-TAC-TOE'
app.appendChild(header);

// create board 

let createBoardGameElement = document.createElement ('div')
createBoardGameElement.classList.add('createBoardGameElement');
app.appendChild(createBoardGameElement);


// create squares


let createTileSquaresElement = document.createElement ('div')
createTileSquaresElement.classList.add('createTileSquaresElement');
app.appendChild(createTileSquaresElement);


// Game state  varibles reuse throughout rest of function
// use this to fill in squares on board when players is playing


// let players = ['O','X'];

// array with each square on game board


// let gameBoard = ['','','','','','','','',''];

// variable that will keep track of current player


// let currentPlayer;

// reference to gameBoard element


// create game board

