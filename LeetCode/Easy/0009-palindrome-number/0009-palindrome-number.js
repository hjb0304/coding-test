/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let result = 0;
    let copyx = x;

    // 10으로 차례차례 나누기
    while (copyx > 0) {
        result = result * 10 + copyx % 10;
        copyx = Math.floor(copyx / 10);
        console.log(result, copyx)
    }

    return result === x;
};