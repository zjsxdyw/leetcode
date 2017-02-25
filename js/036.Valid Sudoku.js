/**
 * @param {character[][]} board
 * @return {boolean}
 */
//Runtime beats 75.64% of javascript submissions.
var isValidSudoku = function(board) {
    const rows = [],
        columns = [],
        subBoxes = [],
        nums = new Set(['0', '1', '2' , '3', '4', '5', '6', '7', '8', '9']);
    for(let i = 0, len1 = board.length; i < len1; i++) {
        for(let j = 0, len2 = board[i].length; j < len2; j++) {
            if(nums.has(board[i][j])) {
                if(!checkAndAdd(rows, i, board[i][j]) || !checkAndAdd(columns, j, board[i][j]) || !checkAndAdd(subBoxes, 3*parseInt(i/3) + parseInt(j/3), board[i][j])) {
                    return false;
                }
            } else if(board[i][j] !== '.') {
                return false;
            }
        }
    }
    return true;
};
var checkAndAdd = function(arr, index, param) {
    if(!arr[index]) {
        arr[index] = new Set();
        arr[index].add(param);
    } else if(arr[index].has(param)) {
        return false;
    } else {
        arr[index].add(param);
    }
    return true;
};
