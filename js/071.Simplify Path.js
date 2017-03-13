/**
 * @param {string} path
 * @return {string}
 */
//Runtime beats 24.36% of javascript submissions.
var simplifyPath = function(path) {
    const stack = [],
        ignore = ['.', ''],
        paths = path.split('/');
    for(let i = 0, len = paths.length; i < len; i++) {
        if (paths[i] === '..') stack.pop();
        else if(ignore.indexOf(paths[i]) === -1) stack.push(paths[i]);
    }
    return '/' + stack.join('/');
};
