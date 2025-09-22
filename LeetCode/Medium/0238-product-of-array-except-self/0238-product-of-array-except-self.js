/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const zero = nums.filter(num => num === 0).length;
    // 0이 2개 이상 존재하는 경우
    if (zero >= 2) return Array(nums.length).fill(0);

    // 전체 곱 구하기
    const product = nums.reduce((acc, cur) => cur === 0 ? acc : acc * cur, 1);
    // 자기 자신을 나눈 결과(숫자가 0이면 해당 숫자 그대로)
    return nums.map(num => {
        // 0이 1개 존재하는 경우
        if (zero === 1) {
            return num === 0 ? product : 0;
        } else return product / num;
    });
};