// https://www.codewars.com/kata/sudoku-solution-validator/train/javascript
// Sudoku Solution Validator

// Pas tres propre mais fonctionne ;-)

function isValidLineOrColumn(lineOrColumn) {
    let isValid = false
    for (let i = 1; i < 10; i++) {
        if (!lineOrColumn.includes(i)) {
            return false
        } else {
            isValid = true
        }
    }
    return isValid
}

function validSolution(board) {
    let col1 = []
    let col2 = []
    let col3 = []
    let col4 = []
    let col5 = []
    let col6 = []
    let col7 = []
    let col8 = []
    let col9 = []

    let block1 = [
        board[0][0], board[0][1], board[0][2],
        board[1][0], board[1][1], board[1][2],
        board[2][0], board[2][1], board[2][2]
    ]
    let block2 = [
        board[0][3], board[0][4], board[0][5],
        board[1][3], board[1][4], board[1][5],
        board[2][3], board[2][4], board[2][5]
    ]
    let block3 = [
        board[0][6], board[0][7], board[0][8],
        board[1][6], board[1][7], board[1][8],
        board[2][6], board[2][7], board[2][8]
    ]

    // ***************************** //
    let block4 = [
        board[3][0], board[3][1], board[3][2],
        board[4][0], board[4][1], board[4][2],
        board[5][0], board[5][1], board[5][2]
    ]
    let block5 = [
        board[3][3], board[3][4], board[3][5],
        board[4][3], board[4][4], board[4][5],
        board[5][3], board[5][4], board[5][5]
    ]
    let block6 = [
        board[3][6], board[3][7], board[3][8],
        board[4][6], board[4][7], board[4][8],
        board[5][6], board[5][7], board[5][8]
    ]

    // ***************************** //
    let block7 = [
        board[6][0], board[6][1], board[6][2],
        board[7][0], board[7][1], board[7][2],
        board[8][0], board[8][1], board[8][2]
    ]
    let block8 = [
        board[6][3], board[6][4], board[6][5],
        board[7][3], board[7][4], board[7][5],
        board[8][3], board[8][4], board[8][5]
    ]
    let block9 = [
        board[6][6], board[6][7], board[6][8],
        board[7][6], board[7][7], board[7][8],
        board[8][6], board[8][7], board[8][8]
    ]

    for (let i = 0; i < board.length; i++) {
        col1.push(board[i][0])
        col2.push(board[i][1])
        col3.push(board[i][2])
        col4.push(board[i][3])
        col5.push(board[i][4])
        col6.push(board[i][5])
        col7.push(board[i][6])
        col8.push(board[i][7])
        col9.push(board[i][8])

        if (!isValidLineOrColumn(board[i])) {
            return false
        }
    }

    if (!isValidLineOrColumn(col1) || !isValidLineOrColumn(col2) || !isValidLineOrColumn(col3) || !isValidLineOrColumn(col4) || !isValidLineOrColumn(col5) || !isValidLineOrColumn(col6) || !isValidLineOrColumn(col7) || !isValidLineOrColumn(col8) || !isValidLineOrColumn(col9)) {
        return false
    } else if(!isValidLineOrColumn(block1) || !isValidLineOrColumn(block2) || !isValidLineOrColumn(block3) || !isValidLineOrColumn(block4) || !isValidLineOrColumn(block5) || !isValidLineOrColumn(block6) || !isValidLineOrColumn(block7) || !isValidLineOrColumn(block8) || !isValidLineOrColumn(block9)) {
        return false
    } else {
        return true
    }
}

const validSudoku = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const notValidSudoku = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
]

validSolution(validSudoku)
