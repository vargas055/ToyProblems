/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let ret = parseInt(s)
    if (ret > 2147483647) {
        ret = 2147483647
    } else if (ret < -2147483648) {
        ret = -2147483648
    }
    if (!ret) {
        ret  = 0
    }
    return ret
};


console.log(myAtoi("words and 987"), 'expect 0')
console.log(myAtoi("987"), 'expect 987')
console.log(myAtoi("-987"), 'expect -987')
console.log(myAtoi("-91283472332"), 'expect -2147483648')
console.log(myAtoi("91283472332"), 'expect 2147483647')
console.log(myAtoi("3.14159"), 'expect 3')
console.log(myAtoi(".1"), 'expect 0')
console.log(myAtoi("   -42"), 'expect -42')
console.log(myAtoi("42"), 'expect 42')
console.log(myAtoi("+-42"), 'expect 0')
console.log(myAtoi("00000-42a1234"), 'expect 0')
console.log(myAtoi("-   234"), 'expect 0')
debugger
console.log()