/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
//Runtime beats 85.71 % of javascript submissions.
var compareVersion = function(version1, version2) {
    let arr1 = version1.split('.'),
        arr2 = version2.split('.'),
        m = arr1.length, 
        n = arr2.length,
        l = Math.max(m, n);
    for(let i = 0; i < l; i++) {
        let num1 = i < m ? parseInt(arr1[i]) : 0,
            num2 = i < n ? parseInt(arr2[i]) : 0;
        if(num1 < num2) return -1;
        else if(num1 > num2) return 1;
    }
    return 0;
};
