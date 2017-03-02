/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//Runtime beats 34.67% of javascript submissions.
var spiralOrder = function(matrix) {
    if(matrix.length === 0) return [];
    let maxUp = 0, maxLeft = 0, maxDown = matrix.length - 1, maxRight = matrix[0].length - 1;
    const res = [];
    while(maxUp <= maxDown && maxLeft <= maxRight) {
        for(let i = maxLeft; i <= maxRight; i++) res.push(matrix[maxUp][i]);
        maxUp++;
        for(let i = maxUp; i <= maxDown; i++) res.push(matrix[i][maxRight]);
        maxRight--;
        if(maxUp <= maxDown) {
            for(let i = maxRight; i >= maxLeft; i--) res.push(matrix[maxDown][i]);
        }
        maxDown--;
        if(maxLeft <= maxRight) {
            for(let i = maxDown; i >= maxUp; i--) res.push(matrix[i][maxLeft]);
        }
        maxLeft++;
    }
    return res;
};
