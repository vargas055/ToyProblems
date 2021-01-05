/**
 * @param {string} s
 * @return {number}
 */
var values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};
var romanToInt = function(s) {
    s = s.split('')
    let result = 0;
    let last = ''
    while(s[s.length - 1]) {   
        if (!last) {
            last = s[s.length - 1]
        }
        if (values[last] > values[s[s.length - 1]]) {
            result -= values[s[s.length - 1]]
        } else {
            last = s[s.length - 1]
            result += values[s[s.length - 1]]
        }
        s.pop()
    }
    return result
};

console.log(romanToInt('III'), 'expect 3')
console.log(romanToInt('IV'), 'expect 4')
console.log(romanToInt('IX'), 'expect 9')
console.log(romanToInt('LVIII'), 'expect 58')
console.log(romanToInt('MCMXCIV'), 'expect 1994')
debugger
console.log()