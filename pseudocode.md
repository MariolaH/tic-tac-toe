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

*  modal pop up - input players names
    pops up when rest button is clicked

    resetClicked
        if resetClicked === clicked
            then board cleared
                then modal pops up


* indication of whos turn its

    switchPlayers()
        if currentPlayerX = click
            then currentPlayerO = click

            OR

*   switchPlayer()
     If currentPlayer == ‘X’
        currentPlayer = ‘O’
        Else
        currentPlayer = ‘X’


```



