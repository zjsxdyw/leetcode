/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
//Runtime beats 61.54 % of javascript submissions.
var maxPoints = function(points) {
    if(points.length <= 2) return points.length;
    let res = 0;
    for(let i = 0, n = points.length; i < n; i++) {
        let map ={},
            samep = 0,
            max = 0;
        for(let j = i + 1; j < n; j++) {
			let x=points[j].x-points[i].x,
			    y=points[j].y-points[i].y;
			if (x === 0 && y === 0){
				samep++;
				continue;
			}
			let gcd = generateGCD(x,y);
			if (gcd !== 0){
				x/=gcd;
				y/=gcd;
			}
			
			if (map[x]){
				if (map[x][y]){
					map[x][y] = map[x][y] + 1;
				}else{
					map[x][y] = 1;
				}   					
			}else{
				map[x] = {};
				map[x][y] = 1;
			}
			max = Math.max(max, map[x][y]);
        }
        res = Math.max(res, max + samep + 1);
    }
    return res;
};
var generateGCD = function(a, b){
	if (b === 0) return a;
	else return generateGCD(b,a % b);
};
