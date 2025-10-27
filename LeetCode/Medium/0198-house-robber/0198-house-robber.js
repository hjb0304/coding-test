/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) return nums[0];
    if(nums.length >= 3) nums[2] += nums[0];
    
    for(let i = 3; i < nums.length; i++) {
        // i번째 값에 i-3과 i-2중 큰 값을 더함 -> i번째에 누적된 돈
        nums[i] += Math.max(nums[i - 3], nums[i - 2]); 
    }

    return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
};