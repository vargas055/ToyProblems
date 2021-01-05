/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 1) {
        return
    };
    for(let a = 0; a < nums.length; a++) {
        while(nums[a] === nums[a + 1]) {
            nums.splice(a, 1)
            a--
        }
    };
    return nums.length
};
// var removeDuplicates = function(nums) {
//     const len = nums.length;
//     for(i = 0; i < len - 1; i++) {
//       if(i > nums.length - 1) {
//         break;
//       }
//       if (nums[i] === nums[i + 1]) {
//         nums.splice(i, 1);
//         i--;
//       }
//     }
//     return nums.length;
// };
console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
debugger
console.log('hey')