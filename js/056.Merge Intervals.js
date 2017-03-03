/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
//Runtime beats 99.29% of javascript submissions.
var merge = function(intervals) {
    const result = [];
    intervals.sort((a,b) => {return a.start - b.start});
    for(let i = 0, len = intervals.length; i < len; i++) {
        let last = result.length - 1;
        if(last < 0) {
            result.push(intervals[i]);
            continue;
        }
        if(intervals[i].start <= result[last].end)
            result[last].end = Math.max(result[last].end, intervals[i].end);
        else result.push(intervals[i]);
    }
    return result;
};
