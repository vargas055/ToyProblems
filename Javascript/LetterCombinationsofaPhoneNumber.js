/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let result = [];
    
    if (digits.length < 1) {
        return result
    };
    
    let letters = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    };
    
    
    let wordMaker = function(word, index) {
        if (digits.length === index) {
            result.push(word)
            return
        }
        for (let x of letters[digits[index]]){
            wordMaker(word + x, index + 1)
        }
    };

    wordMaker('', 0)

    return result
};

console.log(letterCombinations("23"))
debugger
console.log()