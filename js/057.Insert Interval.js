/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
//Runtime beats 46.15% of javascript submissions.
var insert = function(intervals, newInterval) {
    const result = [];
    let i = 0,
        len = intervals.length;
    if(len === 0) return [newInterval];
    while(i < len && intervals[i].end < newInterval.start)
        result.push(intervals[i++]);
    while(i < len && intervals[i].start <= newInterval.end) {
        newInterval.start = Math.min(intervals[i].start, newInterval.start);
        newInterval.end = Math.max(intervals[i].end, newInterval.end);
        i++;
    }
    result.push(newInterval);
    while(i < len) result.push(intervals[i++]);
    return result;
};
