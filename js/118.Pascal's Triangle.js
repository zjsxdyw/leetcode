/**
 * @param {number} numRows
 * @return {number[][]}
 */
//Runtime beats 39.19% of javascript submissions.
var generate = function(numRows) {
    const res = [];
    let lastArr;
    for(let i = 0; i < numRows; i++) {
        if(i === 0) {
            lastArr = [1];
            res.push(lastArr);
            continue;
        }
        let arr = [];
        for(let j = 0; j <= i; j++) {
            arr[j] = (lastArr[j] || 0) + (lastArr[j-1] || 0);
        }
        res.push(arr);
        lastArr = arr;
    }
    return res;
};
