/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 중복되지 않는 수
    let k = 0;

    for(let i = 1; i <= nums.length; i++) {
        // 다음 수가 나타나면 k 증가 후 그 수 할당
        if(nums[k] !== nums[i]) {
            k++;
            nums[k] = nums[i]; 
        }
    }

    return k;
};