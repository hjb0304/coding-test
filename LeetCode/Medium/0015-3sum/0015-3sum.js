/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const answer = [];

    if (nums.every(num => num === 0)) return [[0, 0, 0]];

    for (let i = 0; i < nums.length - 2; i++) {
        // 중복은 건너뜀
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;

        // left < right일 경우에 합에 따라 left, right 조정
        while (left < right) {
            const sum = nums[left] + nums[i] + nums[right];
            if (sum === 0) {
                // 합이 0이면 push
                answer.push([nums[left], nums[i], nums[right]]);
                left++;
                right--;    
                
                // 중복 건너뜀
                while (nums[left] === nums[left - 1]) left++;
                while (nums[right] === nums[right + 1]) right--;
            }
            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            }
        }
    }

    return answer;
};