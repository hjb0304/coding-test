/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    let count = 0;
    const obj = {};

    for(let num of nums) {
        obj[num] = 1;
    }

    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] * nums[j] / 2;
            if(obj[sum]) count++;
        }
    }

    return count;
};