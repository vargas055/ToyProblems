/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let palindromeChecker = (string) => {      
        for (let a = 0; a < string.length; a++) {
            if (string[a] !== string[string.length - a - 1]) {
                return false
            }
        }
        return true
    } 
    let longest = s[0];
    for (let a = 0; a < s.length; a++) {
        let temp = `` + s[a];
        let num = a + 1
        while(s[num]) {
            temp += s[num]
            num++
            if (palindromeChecker(temp) && temp.length > longest.length) {
                longest = temp
            }
        }
    }
    return longest
}; /// THIS IS MY ANSWER

var longestPalindrome = function(s) {
    if (s.length <= 1) return s
    let longest = '', len = s.length
    
    function oneLetterStart (idx) {
        let head = idx, tail = idx
        while (head >= 0 && tail <= len - 1) {
            let subStr = s.substring(head, tail + 1)
            if (s[head] !== s[tail]) break
            if (subStr.length > longest.length) longest = subStr
            head -= 1
            tail += 1
        }
    }
    function twoLetterStart (idx1, idx2) {
        let head = idx1, tail = idx2
        while (head >= 0 && tail <= len - 1) {
            const subStr = s.substring(head, tail + 1)
            if (s[head] !== s[tail]) break
            if (subStr.length > longest.length) longest = subStr
            head -= 1
            tail += 1
        }
    }
    
    for (let i = 0; i < len; i++) oneLetterStart(i)
    for (let i = 0; i < len - 1; i++) twoLetterStart(i, i+1)
    
    return longest
}; // THIS IS A BETTER ANSWER!!!

console.log(longestPalindrome("cbbd") === "bb")
console.log(longestPalindrome("babad") === "bab")
console.log(longestPalindrome("a") === "a")
console.log(longestPalindrome("ac") === "a")
console.log('debbuuuugg')