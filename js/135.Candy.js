/**
 * @param {number[]} ratings
 * @return {number}
 */
//Runtime beats 76.00 % of javascript submissions.
var candy = function(ratings) {
    let right = [1],
        n = ratings.length;
    for(let i = 1; i < n; i++) {
        if(ratings[i] > ratings[i-1]) {
            right[i] = right[i-1] + 1;
        } else {
            right[i] = 1;
        }
    }
    let sum = right[n-1];
    for(let i = n - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i+1]) {
            right[i] = Math.max(right[i+1] + 1, right[i]);
        }
        sum += right[i];
    }
    return sum;
};
