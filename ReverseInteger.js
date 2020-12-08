/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let neg = false
    let reverse = ''
    if (x < 0) {
        neg = true
    }
    let string = x.toString()
    for (let a = 0; a < string.length; a++) {
        reverse+= string[string.length - a - 1]
    }
    if (neg) {
        reverse =  -(parseInt(reverse))
    } else {
        reverse = (parseInt(reverse))
    }
    if (reverse < -2147483648 || reverse > 2147483647) {
        return 0
    }
    return reverse
};

console.log(reverse(-5680))