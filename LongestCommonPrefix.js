/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = '';
    if (strs.length < 1) {
        return result
    } else if (strs.length === 1) {
        return strs[0]
    }
    for (let a = 0; a < strs[0].length; a++) {
        for (let b = 1; b < strs.length; b++) {
            if (strs[b][a] !== strs[0][a]) {
                return result
            }
        }
        result += strs[0][a]
    }
    return result
};

console.log(longestCommonPrefix(["flower","flow","flight"]), 'expect fl')
console.log(longestCommonPrefix(["dog","racecar","car"]), 'expect ')
debugger
console.log()