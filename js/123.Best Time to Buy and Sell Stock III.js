/**
 * @param {number[]} prices
 * @return {number}
 */
//Runtime beats 77.42% of javascript submissions.
var maxProfit = function(prices) {
    let buy1 = - Infinity,
        buy2 = - Infinity,
        sell1 = 0,
        sell2 = 0;
    for(let i = 0, len = prices.length; i < len; i++){
        sell2 = Math.max(sell2, buy2 + prices[i]);
        buy2 = Math.max(buy2, sell1 - prices[i]);
        sell1 = Math.max(sell1, buy1 + prices[i]);
        buy1 = Math.max(buy1, -prices[i]);
    }
    return sell2;
};
