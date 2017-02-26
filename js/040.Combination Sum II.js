/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//Runtime beats 85.71% of javascript submissions.
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) =>{return a-b});
    const result = [];
    const arr = [];
    combinationSum(candidates, target, arr, result, 0);
    return result;
};
var combinationSum = function(candidates, target, arr, result, start) {
    if(!target) {
        result.push(arr.slice());
        return;
    }
    for(let i = start, len = candidates.length; i < len && candidates[i] <= target; i++){
        if(i === start || candidates[i] != candidates[i - 1]) {
            arr.push(candidates[i]);
            combinationSum(candidates, target - candidates[i], arr, result, i + 1);
            arr.pop();
        }
    }
};
