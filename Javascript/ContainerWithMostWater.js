// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var maxArea = function(height) {
//     let mostWater = 0;
//     for (let a = 0; a < height.length; a++) {
//         for (let b = 1; b < height.length; b++) {
//             if (a !== b) {
//                 if (height[a] < height[b]) {
//                     if (height[a] * (b-a) > mostWater) {
                       
//                         mostWater = height[a] * (b - a)
//                     } 
        
//                 } else if (height[b] * (b-a) > mostWater) {
                 
//                     mostWater = height[b] * (b - a)
//                 } 
//             }
//         }
//     }
//     return mostWater
// }; /// slowwwww!!!!!

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = [0, 0]
    let secondMax = [0, 0]

    for (let a = 0; a < height.length; a++) {
        if (height[a] > max[0]) {
            secondMax = max
            max = [height[a], a]
        } else if (height[a] > secondMax[0]) {
            secondMax = [height[a], a]
        }
    }
    debugger
    if (max[1] > secondMax[1]) {
        return secondMax[0] * (max[1] - secondMax[1]) 
    }
    return secondMax[0] * (secondMax[1] - max[1]) 
};


console.log(maxArea([4,3,2,1,4]), 'expect 16')
console.log(maxArea([1,1]), 'expect 1')
console.log(maxArea([1,2,1]), 'expect 2')
console.log(maxArea([1,8,6,2,5,4,8,3,7]), 'expect 49')
debugger
console.log()