/**
 * @param {number} rowIndex
 * @return {number[]}
 */
//Runtime beats 53.91% of javascript submissions.
var getRow = function(rowIndex) {
    let arr = [1];
    for(let i = 0; i < rowIndex; i++) {
        for(let j = i + 1; j >= 1; j--) {
            arr[j] = (arr[j-1] || 0) + (arr[j] || 0);
        }
    }
    return arr;
};
