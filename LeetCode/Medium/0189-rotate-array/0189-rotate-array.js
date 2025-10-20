/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if(nums.length < k) k = k % nums.length;

    const last = nums.splice(nums.length - k, k);
    for(let i = last.length - 1; i >= 0; i--) {
        nums.unshift(last[i]);
    }
};