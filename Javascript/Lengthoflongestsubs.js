/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let subs = ''
    for (let a = 0; a < s.length; a++ ) {
        let string = ''
        let temp = a
        while(s[a] && !string.includes(s[a])) {
            string+= s[a]
            a++
        }
        if (string.length > subs.length) {
            subs = string
        }
        a = temp
    }
    return subs.length
};


console.log(lengthOfLongestSubstring("abcabcbb") === 3, 'expected 3')
console.log(lengthOfLongestSubstring("bbbbb") === 1, 'expected 1')
console.log(lengthOfLongestSubstring("pwwkew") === 3, 'expected 3')
console.log(lengthOfLongestSubstring("") === 0, 'expected 0')
debugger