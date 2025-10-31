/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const answer  = [];
    const obj = {};

    for(let num of nums) {
        // 이미 기록된 숫자면 정답에 push
        if(obj[num]) {
            answer.push(num);
            continue;
        }
        obj[num] = 1;
    }

    return answer;
};