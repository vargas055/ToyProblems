/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0
    }
    for (let a = 0; a < haystack.length; a++) {
        if(haystack.slice(a, a + needle.length) === needle) {
            return a
        }
    }
    return -1
};

console.log(strStr("hello", "ll"))
console.log(strStr("aaaaa", "bba"))
console.log(strStr("", ""))

//Runtime: 72 ms, faster than 95.56% of JavaScript online submissions for Implement strStr().
//Memory Usage: 40.8 MB, less than 8.32% of JavaScript online submissions for Implement strStr().