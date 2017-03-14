/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//Runtime beats 55.10% of javascript submissions.
var setZeroes = function(matrix) {
    let m = matrix.length,
        n = matrix[0].length;
    const row = {},
        colum = {};
    for(let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(matrix[i][j] === 0) {
                row[i] = true;
                colum[j] = true;
            }
        }
    }
    for(let i in row) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = 0;
        }
    }
    for(let j in colum) {
        for (let i = 0; i < m; i++) {
            matrix[i][j] = 0;
        }
    }
};
