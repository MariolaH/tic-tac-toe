let app = document.getElementById('app');

// created element frame - players 1 & 2 and reset button is in frame
let frame = document.createElement('div');
frame.classList.add('frame');
app.appendChild(frame);

// let frame = document.createElement('div');
// frame.className = 'text-center'

// game state 
let players = ['X', 'O'];

// references tiles on board
let board = [];
let rounds = 0;

// Player 1
let player1 = document.createElement('div');
// player1.setAttribute('class', "frame");
player1.textContent = 'P L A Y E R: 1'
frame.appendChild(player1);

// Player 2
let player2 = document.createElement('div');
// player2.setAttribute('class', "frame");
player2.textContent = ('P L A Y E R: 2')
frame.appendChild(player2);

// created header element and added title
let header = document.createElement('div');
header.setAttribute('class', "header");
header.textContent = 'TIC-TAC-TOE'
app.appendChild(header);


// tie notification on board 
let tie = document.createElement('div');
tie.setAttribute('class', "tie");
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

// created turn notification
let turn = document.createElement("div");
turn.textContent = `X's  Turn`;
turn.setAttribute('class', "turn");
// adding it to html doc
app.appendChild(turn);

// switches between players

function clickTile(e) {
    e.target.innerText = currentPlayer;
    if (currentPlayer == players[0]) {
        currentPlayer = players[1]
    } else {
        currentPlayer = players[0];
    }
    // this switchs whos turn it is then displays it up in create turn Notification
    turn.textContent = `${currentPlayer}'s Turn`;
    // disable tile once clicked on
    e.target.disabled = true;
    rounds++;
    // this checks for winner after 5 squares have been clicked
    if (rounds >= 5) {
        checkForWinner();
    }
    // after all squres have been click tie notification pops up
    if (rounds >= 9) {
        tie.textContent = "IT'S A TIE!!!!"
    }
}

// created tiles on board
function buildBoard() {
    // adds tiles to board - i++ increments 
    for (let i = 0; i < 9; i++) {
        // make each tile a button
        let createTileElement = document.createElement("button");
        // append createTileElement(which is button) to the board itself
        createBoardGameElement.appendChild(createTileElement);
        createTileElement.className = "createTileElement";
        // square that is click can no longer be clicked again
        createTileElement.onclick = clickTile;
        board.push(createTileElement);
    }
}

buildBoard();


// reset button
// creates a button reset in html 
let button = document.createElement('button')
// text that will be display on game
button.textContent = 'R E S E T'
// appending it to the game
frame.appendChild(button);
// when click on button will reset the board
button.onclick = resetPage;


let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// console.log(board[0].innerText);

// this functions loops through all possible win senerios
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

// gameover fuction - once game is over disable all squares
function gameOver() {
    // board [] refers to each tile on board, disable each array item in board meaning each tile... once all disbles the game is over 
    board.forEach((item) => {
        item.disabled = true;
    })
}

// reset function

function resetPage() {

    createBoardGameElement.innerText = (" ");
    currentPlayer = players[0];
    player1.textContent = ('P L A Y E R: 1');
    player2.textContent = ('P L A Y E R: 2');
    turn.textContent = `X's Turn`;
    rounds = 0;
    board = [];
    tie.innerText = "";
    buildBoard();

}