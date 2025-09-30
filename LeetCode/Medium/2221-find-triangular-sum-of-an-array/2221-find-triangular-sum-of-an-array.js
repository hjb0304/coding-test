/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    // 숫자가 하나 남을 때까지 반복
    while(nums.length > 1) {
        for(let i = 0; i < nums.length - 1; i++) {
            const newNum = (nums[i] + nums[i + 1]) % 10;
            // 현재 숫자에 새로운 숫자 할당
            nums[i] = newNum;
        }
        // 마지막 숫자 제거
        nums.pop();
    }

    return nums[0];
};