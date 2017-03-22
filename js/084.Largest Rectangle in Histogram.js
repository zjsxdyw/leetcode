/**
 * @param {number[]} heights
 * @return {number}
 */
//Runtime beats 15.38% of javascript submissions.
var largestRectangleArea = function(heights) {
    heights.push(0);
    let max = 0,
        stack = [];
    for(let i = 0, len = heights.length; i < len; i++) {
         while(stack.length && heights[i] <= heights[stack[0]]) {
             let height = heights[stack[0]];
             stack.shift();
             let index = stack.length ? stack[0] : -1;
             max = Math.max(max, (i- index - 1) * height);
         }
         stack.unshift(i);
    }
    return max;
};
