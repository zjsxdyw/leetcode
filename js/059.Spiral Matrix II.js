/**
 * @param {number} n
 * @return {number[][]}
 */
//Runtime beats 100.00% of javascript submissions.
var generateMatrix = function(n) {
    if(n < 1) return [];
    const res = [];
    for(let i = 0; i < n; i++) {
        res[i] = [];
        res[0][i] = i + 1;
    }
    let i = 0, j = n - 1, num = res[0][j], max = n * n, k = 0;
    while(num < max) {
        let index = j;
        i++;
        for(let k = i; k <= j; k++) res[k][index] = ++num;
        [i, j] = [j - 1, i - 1];
        for(let k = i; k >= j; k--) res[index][k] = ++num;
        if(i === j) break;
        index = j;
        j++;
        for(let k = i; k >= j; k--) res[k][index] = ++num;
        index = j;
        [i, j] = [j, i];
        for(let k = i; k <= j; k++) res[index][k] = ++num;
    }
    return res;
};
