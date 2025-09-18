function solution(nums) {
    // return [...new Set(nums)].length <= nums.length / 2 ? [...new Set(nums)].length : nums.length / 2;
    
    // 해시 사용
    const obj = {};
    
    for(let num of nums) {
        obj[num] = (obj[num] || 0) + 1;
    }
    
    const sort = Object.keys(obj).length;
    
    return sort >= nums.length / 2 ? nums.length / 2 : sort;
}