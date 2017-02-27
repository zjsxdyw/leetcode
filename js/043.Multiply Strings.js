/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
//Runtime beats 71.43% of javascript submissions.
var multiply = function(num1, num2) {
    const m = num1.length, n = num2.length, arr = new Array(m + n).fill(0);
    for(let i = m - 1; i >= 0; i--) {
        for(let j = n - 1; j >= 0; j--) {
            let mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0'); 
            let p1 = i + j, p2 = i + j + 1;
            let sum = mul + arr[p2];

            arr[p1] += parseInt(sum / 10);
            arr[p2] = sum % 10;
        }
    }
    return arr.join('').replace(/^0*(?=([1-9])|0$)/, '');
};
