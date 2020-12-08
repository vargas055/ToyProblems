/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (s.search("^" + p + "$") > -1) {
        return true
    }
    return false
};

console.log(isMatch("aa", "a"), "expect False")
console.log(isMatch("aa", "aa"), "expect True")
console.log(isMatch("aa", "a*"), "expect True")
console.log(isMatch("ab", ".*"), "expect True")
console.log(isMatch("aab", "c*a*b"), "expect True")
console.log(isMatch("mississippi", "mis*is*p*."), "expect False")
debugger
console.log()