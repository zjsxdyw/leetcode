/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
//Runtime beats 73.58% of javascript submissions.
var combine = function(n, k) {
    const res = [];
    combinations(res, [], 1, n , k);
    return res;
};
var combinations = function(res, arr, start, end, k) {
    if(arr.length === k) {
        res.push([].concat(arr));
        return;
    }
    for(let i = start; i <= end; i++) {
        arr.push(i);
        combinations(res, arr, i + 1, end, k);
        arr.pop(i);
    }
};
