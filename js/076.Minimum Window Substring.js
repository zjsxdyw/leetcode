/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
//Runtime beats 86.67% of javascript submissions.
var minWindow = function(s, t) {
    const map = {};
    let start = 0,
        end = 0,
        minimum = Infinity,
        n = t.length;
    for(let i = 0; i < n; i++) {
        map[t[i]] = (map[t[i]] || 0) + 1;
    }
    for(let i = 0, len = s.length; i < len;) {
        if(map[s[i++]]-- > 0) {
            n--;
        }
        while(n === 0) {
            if(i - end < minimum) minimum = i - (start = end);
            if(map[s[end++]]++ === 0) n++;
        }
    }
    return minimum === Infinity ? '' : s.substr(start, minimum);
};
