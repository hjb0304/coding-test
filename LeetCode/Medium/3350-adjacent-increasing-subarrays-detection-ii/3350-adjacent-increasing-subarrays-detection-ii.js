/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function (nums) {
    let prev = 0;
    let cur = 1;
    let max = 0;

    for (let i = 1; i < nums.length; i++) {
        // 이어지는 경우 현재 길이 증가
        if(nums[i - 1] < nums[i]) {
            cur++;
            // 끊기는 경우 현재 길이 초기화
        } else {
            prev = cur;
            cur = 1;
        }
        // 현재 길이의 절반 길이와 현재 길이&이전 길이 중 작은 길이를 비교해서 큰 수 할당
        max = Math.max(max, Math.max(Math.floor(cur / 2), Math.min(prev, cur)));
    }

    return max;
};