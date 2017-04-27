/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
//Runtime beats 77.14 % of javascript submissions.
var canCompleteCircuit = function(gas, cost) {
    let start = 0,
        count = 0,
        i = 0,
        sum = 0,
        len = gas.length;
    while(start < len && count < len) {
        sum += gas[i] - cost[i];
        count++;
        while(sum < 0 && start < len) {
            sum -= gas[start] - cost[start];
            start++;
            count--;
        }
        if(++i === len) i = 0;
    }
    return count === len ? start : -1;
};
