/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
//Runtime beats 71.43% of javascript submissions.
var findSubstring = function(s, words) {
    let len = words.length,
        result = [];
    if(len === 0) return result;
    let map = {},
        slen = s.length,
        strlen = words[0].length;
    for(let x in words) {
        map[words[x]] = (map[words[x]] || 0) + 1;
    }
    for(let i = 0; i < strlen; i++) {
        let count = 0,
            tempMap = {},
            left = i;
        for(let j = i; j <= slen - strlen; j += strlen) {
            let tempStr = s.substr(j, strlen);
            if(map[tempStr]) {
                tempMap[tempStr] = (tempMap[tempStr] || 0) + 1;
                if(tempMap[tempStr] <= map[tempStr]) {
                    count++;
                } else {
                    while(tempMap[tempStr] > map[tempStr]) {
                        let tempStr2 = s.substr(left, strlen);
                            tempMap[tempStr2]--;
                        if(tempMap[tempStr2] < map[tempStr2]) {
                            count--;
                        }
                        left += strlen;
                    }
                }
                if(count === len) {
                    result.push(left);
                    tempMap[s.substr(left, strlen)]--;
                    count--;
                    left += strlen;
                }
            } else {
                tempMap = {};
                count = 0;
                left = j + strlen;
            }
        }
    }
    return result;
};
