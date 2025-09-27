/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const count = {};
    let answer = [];

    nums.forEach((num, i) => {
    // 짝이 맞는 숫자가 있으면 answer에 추가
        if(target - num in count) {
            answer = [count[target - num], i]; 
            // 없으면 각 숫자와 인덱스를 저장
            } else count[num] = i;
    });
    return answer;
};