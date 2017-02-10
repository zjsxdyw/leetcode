/**
 * @param {string} s
 * @return {string}
 */
//Runtime beats 91.53% of javascript submissions.
var longestPalindrome = function(s) {
    if(s.length <= 1) return s;
    let start = 0,
        end = 0;
    for(let i = 0; i < s.length; i++){
        let j = i,
            k = i;
        while(k < s.length-1 && s[k] === s[k+1]){
            k++;
        }
        while(j > 0 && k < s.length-1 && s[j-1] == s[k+1]){
            k++;
            j--;
        }
        if((k-j) > (end-start)){
            start = j;
            end = k;
        }
        
    }
    return s.substring(start, end+1);
};
