/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {number}
 */
//Runtime beats 84.21% of javascript submissions.
var ladderLength = function(beginWord, endWord, wordList) {
    var visible = new Set(),
        i,j,num = 1,
        arr = [],
        changeStr,word,string = 'abcdefghijklmnopqrstuvwxyz',
        obj;
    arr.push({word:beginWord, num:num});
    while(arr.length !== 0){
        obj = arr.shift();
        word = obj.word;
        num = obj.num;
        if(word === endWord) return num;
        for(i = 0; i < word.length; i++){
            for(j = 0; j < 26; j++){
                changeStr = word.substring(0,i) + string[j] + word.substring(i+1,word.length);
                if(!wordList.has(changeStr) && changeStr !== endWord || visible.has(changeStr)) continue;
                visible.add(changeStr);
                arr.push({word:changeStr, num:(num + 1)});
            }
        }
    }
    return 0;
};
