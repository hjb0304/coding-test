/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    // 1의 인덱스 저장
    let prev = nums.indexOf(1);

    for (let i = prev + 1; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (i <= prev + k) {
                return false;
            } else prev = i;
        }
    }

    return true;
};