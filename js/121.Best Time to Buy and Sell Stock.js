/**
 * @param {number[]} prices
 * @return {number}
 */
//Runtime beats 40.82% of javascript submissions.
var maxProfit = function(prices) {
    let curMin = Infinity,
        max = 0;
    for(let i = 0, len = prices.length; i < len; i++){
        if(curMin > prices[i]) curMin = prices[i];
        else max = Math.max(max, prices[i] - curMin);
    }
    return max;
};
