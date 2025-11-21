/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const arr = [];

    for(let i = 0; i < nums.length * 2; i++) {
        arr[i] = nums[i % nums.length];
    }

    return arr;
};