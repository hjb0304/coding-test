/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let last = digits.length - 1;
    // 1 증가
    digits[last]++;

    // 마지막 자리가 10이 되면 그 전 자리 증가
    while(digits[last] === 10) {
        digits[last] = 0;
        // 마지막 last도 10이면 맨 앞자리 추가
        if(last === 0) {
            digits.unshift(1);
        } digits[last - 1]++;
        last--;
    }

    return digits;
};