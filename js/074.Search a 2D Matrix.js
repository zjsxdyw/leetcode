/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//Runtime beats 65.52% of javascript submissions.
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    if(m === 0) return false;
    let n = matrix[0].length;
    if(n === 0) return false;
    let left = 0, right = m * n - 1;
    while (left != right){
        let mid = (left + right - 1) >> 1;
        if (matrix[mid / n | 0][mid % n] < target)
            left = mid + 1;
        else 
            right = mid;
    }
    return matrix[right / n | 0][right % n] === target;
};
