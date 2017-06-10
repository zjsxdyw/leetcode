/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//Runtime beats 96.10 % of javascript submissions.
var twoSum = function(numbers, target) {
    let start = 0,
        end = numbers.length - 1,
        sum;
    while((sum = numbers[start] + numbers[end]) !== target) {
        if(sum > target) end--;
        else start++;
    }
    return [start+1, end+1];
};
