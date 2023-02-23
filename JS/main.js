let app = document.getElementById('app');

let frame = document.createElement('frame');
frame.classList.add('frame');
app.appendChild(frame);

// let frame = document.createElement('div');
// frame.className = 'text-center'

// game state 
let players = ['X', 'O'];

// references tiles on board
let board = [];

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
let createBoardGameElement = document.createElement('div')
createBoardGameElement.classList.add('createBoardGameElement');
app.appendChild(createBoardGameElement);


// create squares 
let createTileElement = document.createElement('div')
createTileElement.classList.add('createTileElement');
// createBoardGameElement.appendChild(createTileElement);

// who the current player is = X
let currentPlayer = players[0];


// switches between players

function clickTile(e) {
    e.target.innerText = currentPlayer;
    if (currentPlayer == players[0]) {
        currentPlayer = players[1]
    } else {
        currentPlayer = players[0];
    }
    // disable tile once clicked on
    e.target.disabled = true;
    console.log(board[0].innerText);

}



// created tiles on board

function buildBoard() {
    for (let i = 0; i < 9; i++) {
        let createTileElement = document.createElement("button");
        createBoardGameElement.appendChild(createTileElement);
        createTileElement.className = "createTileElement";
        // square that is click can no longer be clicked again
        createTileElement.onclick = clickTile;
        board.push(createTileElement);
    }
}

buildBoard();



let button = document.createElement('button')
button.textContent = 'R E S E T'
app.appendChild(button);

// reset button

// let resetPage() {
// createBoardGameElement = buildBoard();
//     createBoardGameElement();
//     button();
// }


// let winConditions = [
// 		[0,1,2]
// 		[3,4,5]
// 		[6,7,8]
// 	    [0,3,6]
// 		[1,4,7]
// 		[2,5,8]
// 		[0,4,8]
// 		[2,4,6]
// ];

console.log(board[0].innerText);
function checkForWinner() => {
    let player0 = players[0];
    let player1 = player[1];

    switch (true) {
        case: board[0].innerText == player[0] && board[1].innerText == player[0] && board[2].innerText == player[0] &&
            break;

            case board[3].innerText == player[0] &&
            board[4].innerText == player[0] &&
            board[5].innerText == player[0] &&
            break;

            case board[6].innerText == player[0] &&
            board[7].innerText == player[0] &&
            board[8].innerText == player[0] &&
            break;

            case board[0].innerText == player[0] &&
            board[3].innerText == player[0] &&
            board[6].innerText == player[0] &&
            break;

            case board[1].innerText == player[0] &&
            board[4].innerText == player[0] &&
            board[7].innerText == player[0] &&
            break;

            case board[2].innerText == player[0] &&
            board[5].innerText == player[0] &&
            board[8].innerText == player[0] &&
            break;

             case board[0].innerText == player[0] &&
            board[4].innerText == player[0] &&
            board[8].innerText == player[0] &&
            break;

            case: board[2].innerText == player[0] &&
            board[4].innerText == player[0] &&
            board[6].innerText == player[0] &&
            break;
    }






// create switch statement with all the possible outcomes or loop through winConditions


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




// array with each square on game board




// variable that will keep track of current player




// reference to gameBoard element




