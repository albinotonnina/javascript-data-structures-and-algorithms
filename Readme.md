## Sudoku Solver

### Solved with a backtracking algorithm

![alt text](solution.gif "Sudoku Solver Backtracking algorithm")


### Functions

**parseBoard**: Parse the string into a 2D array and convert strings to integers for easier manipulation.

**saveEmptyPositions**: Iterate through the board and save all of the empty positions into an array so we can track which numbers are mutable and keep order to our testing.

**checkRow**, **checkColumn**, **check3x3Square**, **checkValue**: Check the column, row, and current 3x3 square for a match to the current value tested, which can all be called with checkValue.

**solvePuzzle**: Take the parsed Sudoku board and the array of empty positions, and find the solution.

**solveSudoku**: Parse the board, save the empty positions, and pass them to solvePuzzle.



### Install
`npm install`

### Test
`npm run test`

### Start
`npm start`