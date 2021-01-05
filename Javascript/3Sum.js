// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//     let result = [];
//     let flag = false
//     if (nums.length < 3) {
//         return result
//     }
//     for (let a = 0;a < nums.length - 2; a++) {
//         for (let b = a + 1; b < nums.length; b++) {
//             for (let c = b + 1; c <nums.length; c++) {
//                 if (nums[a] + nums[b] + nums[c] === 0) {
//                     if ((a !== b) && (c !== a) && (b !== c)) {
//                         if(result.length > 0) {
//                             for (let d = 0; d < result.length; d++) {
//                             // debugger
//                                 if ((result[d].includes(nums[a]) && (result[d].includes(nums[b]) && (result[d].includes(nums[c]))))){
//                                     // debugger
//                                     flag = true
//                                     break;
//                                 }
//                             }
//                         }
//                         if (nums[a] === 0 && nums[b] === 0 && nums[c] === 0 && a !== b && a !==c) {
//                             flag = false
//                         }
//                         // debugger
//                         if (!flag) {
//                             result.push([nums[a], nums[b], nums[c]])
//                         }
//                         flag = false 
//                     } else {
//                         result.push([nums[a], nums[b], nums[c]])
//                     }
//                 }
//             }
//         }
//     }
//     return result
// };


var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const r = [];
    for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i] > 0) {
          debugger 
          break
        };
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        const s = nums[i] + nums[left] + nums[right];
        if (s < 0) left += 1;
        else if (s > 0) right -= 1;
        else {
          r.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left += 1;
          while (left < right && nums[right] === nums[right - 1]) right -= 1;
          left += 1;
          right -= 1;
        }
      }
    }
    
    return r;
  };

console.log(threeSum([-1,0,1,2,-1,-4]), 'expect [[-1,-1,2],[-1,0,1]]')
console.log(threeSum([3,0,-2,-1,1,2]), 'expect [[-2,-1,3],[-2,0,2],[-1,0,1]]')
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]), 'expect [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]')
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]), 'expect [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]')
console.log(threeSum([1,2,-2,-1]), 'expect []')
console.log(threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]), 'expect [[-5,1,4],[-4,0,4],[-4,1,3],[-2,-2,4],[-2,1,1],[0,0,0]]')
console.log(threeSum([0,0,0,0]), 'expect [[0,0,0]]')
debugger
console.log()