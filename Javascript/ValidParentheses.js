/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s[0] !== '(' && s[0] !== '[' && s[0] !== '{') {
        return false
    }
    let answer = true
    let closers = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let a = 0; a < s.length; a++) {
        if (s[a] === '(') {
            // debugger
            if (s[a + 1] !== closers[s[a]]) {
                // debugger
                if (s.length - a -1 < a) {
                    answer = false 
                 } else if (s[s.length - a - 1] !== closers[s[a]]) {
                    answer = false
                }
            }
        } else if (s[a] === '[') {
            // debugger
            if (s[a + 1] !== closers[s[a]]) {
                // debugger
                if (s.length - a -1 < a) {
                    answer = false 
                 } else if (s[s.length - a - 1] !== closers[s[a]]) {
                    answer = false
                }
            }
        } else {
            if (s[a] === '{') {
                // debugger
                if (s[a + 1] !== closers[s[a]]) {
                    // debugger
                    if (s.length - a -1 < a) {
                       answer = false 
                    } else if (s[s.length - a - 1] !== closers[s[a]]) {
                        answer = false
                    }
                }
            }
        }
    }
    return answer
};

console.log(isValid("()", true))
console.log(isValid(")", false))
console.log(isValid("()[]{}", true))
console.log(isValid("(}", false))
console.log(isValid("([)]", false))
console.log(isValid("{[]}", true))
console.log(isValid("([])", true))
console.log(isValid("(}{)", false))
// debugger
console.log()
