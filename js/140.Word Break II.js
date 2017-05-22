/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
//Runtime beats 100.00 % of javascript submissions.
var wordBreak = function(s, wordDict) {
    return dfs(s, wordDict, {});
};
var dfs = function(s, wordDict, map){
    if(map[s]) return map[s];
    if(s === '') return [''];
    let res = [];
    for(let i = 0, len = wordDict.length; i < len; i++) {
        if(s.substring(0, wordDict[i].length) === wordDict[i]) {
            let subList = dfs(s.substring(wordDict[i].length), wordDict, map);
            for(let j = 0, n = subList.length; j < n; j++) {
                res.push(wordDict[i] + (subList[j] ? ' ' : '') + subList[j]);
            }
        }
    }
    map[s] = res;
    return res;
};
