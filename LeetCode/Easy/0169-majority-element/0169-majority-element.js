/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const count = new Map();
    nums.sort((a, b) => a - b);

    // 숫자의 개수 기록
    for(let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    for(let num of count.keys()) {
        if(count.get(num) > nums.length / 2) return num;
    }
};