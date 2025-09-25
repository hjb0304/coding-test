/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let min = Infinity;
    let sum = 0;

    for(let right = 0; right < nums.length; right++) {
        sum += nums[right];
        // sum이 target 이상이면 min 갱신, 최대한 left 증가시켜 범위 좁히기 
        while(sum >= target) {
            min = Math.min(min, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return min === Infinity ? 0 : min;
};