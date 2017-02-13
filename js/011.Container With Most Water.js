/**
 * @param {number[]} height
 * @return {number}
 */
//Runtime beats 77.62% of javascript submissions.
var maxArea = function(height) {
    let i = 0, j = height.length - 1,
        area = 0;
    while(i < j) {
        area = Math.max(area, Math.min(height[i], height[j]) * (j - i));
        if(height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return area;
};
