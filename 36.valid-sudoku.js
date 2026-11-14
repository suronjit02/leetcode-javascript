/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    let rows = new Array(9).fill(0).map(() => new Set());
    let cols = new Array(9).fill(0).map(() => new Set());
    let boxes = new Array(9).fill(0).map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let cell = board[i][j];
            if (cell === '.') continue;

            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (rows[i].has(cell) || cols[j].has(cell) || boxes[boxIndex].has(cell)) {
                return false;
            }

            rows[i].add(cell);
            cols[j].add(cell);
            boxes[boxIndex].add(cell);
        }
    }

    return true;
};
// @lc code=end
