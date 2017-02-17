/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
//Runtime beats 60.53% of javascript submissions.
var fourSum = function(nums, target) {
    const result = [],
        map = {};
    if(nums.length < 4) return result;
    nums.sort((a, b) => {return a - b;});
    for(let first = 0, len = nums.length; first < len - 3; first++) {
        for(let second = first + 1; second < len - 2; second++) {
            let third = second + 1,
                fourth = len - 1;
            while(third < fourth) {
                let temp;
                if((temp = nums[first] + nums[second] + nums[third] + nums[fourth] - target) === 0) {
                    let array = [nums[first], nums[second], nums[third], nums[fourth]];
                    if(!map[array]) {
                        result.push([nums[first], nums[second], nums[third], nums[fourth]]);
                        map[array] = true;
                    }
                }
                if(temp < 0) {
                    third++;
                } else {
                    fourth--;
                }
            }
        }
    }
    return result;
};
