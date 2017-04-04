/**
 * @param {character[][]} matrix
 * @return {number}
 */
//Runtime beats 50.00% of javascript submissions.
var maximalRectangle = function(matrix) {
    if(!matrix || !matrix[0]) return 0;
    let n = matrix[0].length,
        heights = new Array(n + 1).fill(0),
        res = 0;
    for(let m in matrix) {
        for(let i = 0; i < n; i++) {
            if(matrix[m][i] == '1') heights[i] = heights[i] + 1;
            else heights[i] = 0;
        }
        let stack = [-1];
        for(let i = 0; i <= n; i++) {
            while(heights[i] < heights[stack[stack.length - 1]]) {
                let height = heights[stack.pop()],
                    width = i - 1 - stack[stack.length - 1];
                res = Math.max(res, height * width);
            }
            stack.push(i);
        }
    }
    return res;
};
