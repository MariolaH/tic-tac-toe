let app = document.getElementById('app');

let frame = document.createElement('div');
frame.classList.add('frame');
app.appendChild(frame);

// let frame = document.createElement('div');
// frame.className = 'text-center'

// game state 
let players = ['x', 'o'];

// references tiles on board
let board = [];
let rounds = 0;

// Player 1
let player1 = document.createElement('div');
player1.setAttribute('class', "frame");
player1.textContent = 'P L A Y E R: 1'
frame.appendChild(player1);

// Player 2
let player2 = document.createElement('div');
player2.setAttribute('class', "frame");
player2.textContent = ('P L A Y E R: 2')
frame.appendChild(player2);



// Created title for the game 
let header = document.createElement('div');
header.setAttribute('class', "header");
header.textContent = 'TIC-TAC-TOE'
app.appendChild(header);

let tie = document.createElement('div');
app.appendChild(tie);


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

// turn

let turn = document.createElement("div");
turn.textContent = `X's Turn`;
turn.setAttribute('class', "turn");
app.appendChild(turn);

// switches between players

function clickTile(e) {
    e.target.innerText = currentPlayer;
    if (currentPlayer == players[0]) {
        currentPlayer = players[1]
    } else {
        currentPlayer = players[0];
    }
    turn.textContent = `${currentPlayer}'s Turn`;
    // disable tile once clicked on
    e.target.disabled = true;
    rounds ++;
    if (rounds >= 5) {
        checkForWinner();
        
    } 
    if (rounds >= 9) {
        tie.textContent = "it's a TIE!!!!"
        
    } 
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
button.onclick = resetPage;


let winConditions = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
	    [0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6],
];

// console.log(board[0].innerText);

function checkForWinner() {
    let x = players[0];
    let o = players[1];

    switch (true) {
        case board[0].innerText == x &&
            board[1].innerText == x &&
            board[2].innerText == x:

        case board[3].innerText == x &&
            board[4].innerText == x &&
            board[5].innerText == x:


        case board[6].innerText == x &&
            board[7].innerText == x &&
            board[8].innerText == x:


        case board[0].innerText == x &&
            board[3].innerText == x &&
            board[6].innerText == x:


        case board[1].innerText == x &&
            board[4].innerText == x &&
            board[7].innerText == x:


        case board[2].innerText == x &&
            board[5].innerText == x &&
            board[8].innerText == x:


        case board[0].innerText == x &&
            board[4].innerText == x &&
            board[8].innerText == x:


        case board[2].innerText == x &&
            board[4].innerText == x &&
            board[6].innerText == x:
            player1.textContent = "X wins!"
            gameOver();
            break;

        case board[0].innerText == o &&
            board[1].innerText == o &&
            board[2].innerText == o:

        case board[3].innerText == o &&
            board[4].innerText == o &&
            board[5].innerText == o:


        case board[6].innerText == o &&
            board[7].innerText == o &&
            board[8].innerText == o:


        case board[0].innerText == o &&
            board[3].innerText == o &&
            board[6].innerText == o:


        case board[1].innerText == o &&
            board[4].innerText == o &&
            board[7].innerText == o:


        case board[2].innerText == o &&
            board[5].innerText == o &&
            board[8].innerText == o:


        case board[0].innerText == o &&
            board[4].innerText == o &&
            board[8].innerText == o:


        case board[2].innerText == o &&
            board[4].innerText == o &&
            board[6].innerText == o:
            player2.textContent = "O wins!"
            gameOver();
            break;
    }
}

function gameOver() {
    board.forEach((item) =>{
        item.disabled = true;
    })
}

// reset button

function resetPage() {

    createBoardGameElement.innerText= (" ");
    currentPlayer = players[0];
    player1.textContent = ('P L A Y E R: 1');
    player2.textContent = ('P L A Y E R: 2');
    turn.textContent = `X's Turn`;
    rounds = 0;
    board= [];
    tie.innerText= "";
    buildBoard();

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




