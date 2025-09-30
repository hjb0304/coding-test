/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    while(nums.length > 1) {
        const newNums = [];
        for(let i = 0; i < nums.length - 1; i++) {
            const newNum = (nums[i] + nums[i + 1]) % 10;
            newNums.push(newNum);
        }
        nums = [...newNums];
        console.log(nums)
    }

    return nums[0];
};