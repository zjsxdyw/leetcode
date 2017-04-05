/**
 * @param {number} n
 * @return {number}
 */
//Runtime beats 88.33% of javascript submissions.
var numTrees = function(n) {
    const G = new Array(n + 1);
    G[0] = G[1] = 1;
    
    for(let i = 2; i <= n; i++) {
    	for(let j = 1; j <= i; j++) {
    		G[i] = G[j-1] * G[i-j] + (G[i] || 0);
    	}
    }
    return G[n];
};
