/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let next = nums.length - 1;

    // i에서 목표 지점으로 건너뛸 수 있으면 i가 다음 목표 지점이 됨
    for(let i = nums.length - 2; i >= 0; i--) {
        if(i + nums[i] >= next) next = i; 
    }

    return next === 0;
};