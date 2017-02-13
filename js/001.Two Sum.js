/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Runtime beats 97.05% of javascript submissions.
var twoSum = function(nums, target) {
    var map = {},
        index;
    for(var i = 0; i < nums.length; i++){
        map[nums[i]] = i;
    }
    for(i = 0; i < nums.length; i++){
        index = map[target- nums[i]];
        if(index !== undefined && index !== i){
            return [i, index]; 
        }
    }
};
