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


// create squares append tiles to createBoardGameElement


let createTileElement = document.createElement ('div')
createTileElement.classList.add('createTileElement');
createBoardGameElement.appendChild(createTileElement);

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

reset 


// function buildBoard() {
//     for(let i = 0; i < 9; i++) {
//         let tile = document.createElement("button");
//         app.appendChild(tile);
//         tile.className = "tile";
//         tile.onclick = clickTile; 
//     }
// }

// buildBoard();




// Game state  varibles reuse throughout rest of function
// use this to fill in squares on board when players is playing


// let players = ['O','X'];

// array with each square on game board


// let gameBoard = ['','','','','','','','',''];

// variable that will keep track of current player


// let currentPlayer;

// reference to gameBoard element


// create game board

