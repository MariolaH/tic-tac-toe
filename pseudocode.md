# TIC-TAC-TOE

## OBJECTIVE

```
The point of the game is to get 3 in a row, horizontally, vertically or diagonally.

The game requires 2 players

* game should let the player know whos turn it is
    * player X
    * player O

* Each square can only be clicked on once
* Once game is over squares should not be clickable
*Result:
    * display who is the winner
    * otherwise tie
* Reset button to restart game (not refresh page, set state)
* Each player gets a turn to click a square
* Game Over when:
    * Wins: 1 player gets 3 in a row (horizontally, vertically or diagonally)
    * draw: no more winning combination left    
```

## VARIABLES

```
State (things that change)

    * currentPlayer
        * Player X
        * Player O

    * boardState = [0,1,2,3,4,5,6,7,8]
        *squares on the rectangular board

    * winCondition
        * All the winning conditions

        [0,1,2]
        [3,4,5]
        [6,7,8]
        [0,3,6]
        [1,4,7]
        [2,5,8]
        [0,4,8]
        [2,4,6]

    *loseCondition
        *out of combinations/draw
```

## FUNCTION
```
* init ()

* createBoard

* createPlayers



*  modal pop up - input players names??

    pops up when rest button is clicked??


    resetClicked
        if resetClicked === clicked
            then board cleared
                then modal pops up


* indication of whos turn its

when player clicks on board switches to next players name



  


when click on board switched between players
when no more combinations endGame ()





game starts by modal popping to register players names

input names begin game
eventlistener to registers player
    registerPlayers 
        if input names complete
        then start game
    
    

game is already reset - no need to do anything but start playing

scoreboard inticates who starts
connected to switch players

player 1 clicks on board (symbol)


        *   switchPlayer()
     If currentPlayer == ‘X’
        currentPlayer = ‘O’
        Else
        currentPlayer = ‘X’

* makeMove()
    Adds the current player to the tile clicked


        checkWin()
        If win do endGame()
        else
        Switches the currentPlayer in state
        Removes the eventListener

scoreboard switches to player 2


player 2 clicks on board

        *   switchPlayer()
     If currentPlayer == ‘X’
    
        currentPlayer = ‘O’
        Else
        currentPlayer = ‘X’

* makeMove()
    Adds the current player to the tile clicked


        checkWin()
        If win do endGame()
        else
        Switches the currentPlayer in state
        Removes the eventListener

cannot click on same tile twice (need to disable that clickevent listener on that tile once it is clicked)


players go back and forth till

    3 in a row
        or
    no more combinations (draw)

        when player gets 3 in row endGame ()
    *       if winner === winnerConditions
            then player? wins
            else draw (no winner)

modal pop up indicating who has won or draw or alert

    *endGame()
        Display the winner of the game
        Remove all event listeners
        Show reset game button


close modal

hit reset button

    
    resetGame()
        Drawboard
        Resets state to initial values


game restarts








each seperate tile has its own div class="tile 0" etc

create switch statement with all the conditions in it

case 0 (is tile 1
    run winCondition if 3 in a row [case 0,1,2]=win
    disable that tile till reset game
    
)
