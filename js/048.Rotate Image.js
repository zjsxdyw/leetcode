/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//Runtime beats 69.89% of javascript submissions.
var rotate = function(matrix) {
    let start = 0,
        end = matrix.length - 1;
    while(start < end) {
        for(let i = start; i < end; i++) {
            let j = end - i + start;
            [matrix[start][i], matrix[j][start]] = [matrix[j][start], matrix[start][i]];
            [matrix[i][end], matrix[end][j]] = [matrix[end][j], matrix[i][end]];
            [matrix[j][start], matrix[i][end]] = [matrix[i][end], matrix[j][start]];
        }
        start++;
        end--;
    }
};
