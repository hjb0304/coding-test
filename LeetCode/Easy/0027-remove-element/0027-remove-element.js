/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // val이 아닌 숫자들의 개수
    let k = 0;

    // val이 아니면 첫째자리부터 채움
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val)  {
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k;
};