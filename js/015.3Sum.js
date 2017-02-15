/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//Runtime beats 24.20% of javascript submissions.
var threeSum = function(nums) {
    let i, result = [],
        len = nums.length;
    nums.sort((a,b)=>{return a-b});
    for (let i = 0; i < len; i++){
        if(nums[i] > 0) break;
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let j = i + 1, k = len - 1;
        while (j < k){
            if (nums[i] + nums[j] + nums[k] > 0) k--;
            else if (nums[i] + nums[j] + nums[k] < 0) j++;
            else{
                result.push([nums[i], nums[j], nums[k]]);
                while (j < k && nums[k] == nums[k - 1]) k--;
                while (j < k && nums[j] == nums[j + 1]) j++;
                k--; j++;
            }
        }
    }
    return result;
};
