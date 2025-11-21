/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let con = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1]) {
            con = 0;
        }
        if(nums[i] === 1) {
            con++;
            max = Math.max(max, con);
        }
    }

    return max;

};