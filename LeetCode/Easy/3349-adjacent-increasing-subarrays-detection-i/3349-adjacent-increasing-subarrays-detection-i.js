/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
    // 배열의 각 숫자가 점점 증가하는지 판단
    const isIncrease = (arr) => {
        for(let i = 0; i < arr.length; i++) {
            if(i === arr.length - 1) break;
            if(arr[i] >= arr[i + 1]) return false;
        }
        return true;
    };

    for(let i = 0; i <= nums.length - k - k; i++) {
        const first = nums.slice(i, i + k);
        const second = nums.slice(i + k, i + k + k);

        // 둘다 점점 증가하면 true
        if(isIncrease(first) && isIncrease(second)) return true;
    }

    return false;
};