/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 새로 구성하는 숫자
    let result = 0;
    let copyx = x;

    // 10으로 차례차례 나누기
    while (copyx > 0) {
        // result를 첫째자리부터 채우고 그 다음 자리를 더함
        result = result * 10 + copyx % 10;
        copyx = Math.floor(copyx / 10);
    }

    return result === x;
};