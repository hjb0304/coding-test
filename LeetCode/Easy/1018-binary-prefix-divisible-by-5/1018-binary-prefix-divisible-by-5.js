/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    const answer = [];
    let current = 0;

    for(let num of nums) {
        // 이진수는 자릿수 늘릴 때 2를 곱함
        current = (current * 2 + num) % 5;
        answer.push(current === 0);
    }

    return answer;

};