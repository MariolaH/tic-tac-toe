let app = document.getElementById('app');

let frame = document.createElement('frame');
frame.classList.add('frame');
app.appendChild(frame);

// let frame = document.createElement('div');
// frame.className = 'text-center'

// Player 1
let player1 = document.createElement('player1');
player1.setAttribute('class', "frame");
player1.textContent = 'P L A Y E R: 1'
frame.appendChild(player1);

// Player 2

let player2 = document.createElement('player2');
player2.setAttribute('class', "frame");
player2.textContent = ('P L A Y E R: 2')
frame.appendChild(player2);

// Created title for the game 

let header = document.createElement('TIC-TAC-TOE');
header.setAttribute('class', "header");
header.textContent = 'TIC-TAC-TOE'
app.appendChild(header);

// create board 

let createBoardGameElement = document.createElement ('div')
createBoardGameElement.classList.add('createBoardGameElement');
app.appendChild(createBoardGameElement);


// create squares 


let createTileElement = document.createElement ('div')
createTileElement.classList.add('createTileElement');
// createBoardGameElement.appendChild(createTileElement);

let currentPlayer = "X";

// switches between players

function clickTile(e) {
    e.target.innerText = currentPlayer;
    if(currentPlayer == 'X') {
        currentPlayer = "O"
    } else {
        currentPlayer = "X";
    }
    // disable tile once clicked on
    e.target.disabled = true;
}



// created tiles on board

function buildBoard() {
    for(let i = 0; i < 9; i++) {
        let createTileElement = document.createElement("button");
        createBoardGameElement.appendChild(createTileElement);
        createTileElement.className = "createTileElement";
        createTileElement.onclick = clickTile; 
    }
}

buildBoard();

let button = document.createElement('button')
button.textContent = 'R E S E T'
app.appendChild(button);

// winConditions
// 		[0,1,2]
// 		[3,4,5]
// 		[6,7,8]
// 	    [0,3,6]
// 		[1,4,7]
// 		[2,5,8]
// 		[0,4,8]
// 		[2,4,6]

// reset button

// function to reset game

// function reset() {

//     if clickTile === winCondition
//         then winner
//         else clickTile != winCondition
//         then draw
// } 


// need to connect clicktile to who's turn it is






// Game state  varibles reuse throughout rest of function
// use this to fill in squares on board when players is playing


// let players = ['O','X'];

// array with each square on game board


// let gameBoard = ['','','','','','','','',''];

// variable that will keep track of current player


// let currentPlayer;

// reference to gameBoard element


// create game board

