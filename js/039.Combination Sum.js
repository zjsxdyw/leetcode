/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//Runtime beats 97.06% of javascript submissions.
var combinationSum = function(candidates, target) {
    const result = [];
    for(let i = candidates.length - 1; i >= 0; i--) {
        if(target > candidates[i]) {
            let quotient = parseInt(target / candidates[i], 10);
            if(target - quotient * candidates[i] === 0) {
                const array = [];
                for(let k = 0; k < quotient; k++) {
                    array.push(candidates[i]);
                }
                result.unshift(array);
                quotient--;
            }
            while(quotient > 0) {
                const array = combinationSum(candidates.slice(0, i), target - quotient * candidates[i]);
                for(let j = 0; j < array.length; j++) {
                    for(let k = 0; k < quotient; k++) {
                        array[j].push(candidates[i]);
                    }
                    result.unshift(array[j]);
                }
                quotient--;
            }
        } else if(target - candidates[i] === 0){
            result.push([candidates[i]]);
        }
    }
    return result;
};
