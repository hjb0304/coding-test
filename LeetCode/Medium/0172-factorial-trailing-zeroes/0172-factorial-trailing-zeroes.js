/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    // let sum = 1;
    // let count = 0;

    // // 팩토리얼 계산하면서 10으로 나눠떨어지면 10으로 미리 나누기
    // for (let i = 1; i <= n; i++) {
    //     sum *= i;
    //     while (sum % 10 === 0) {
    //         sum /= 10;
    //         count++;
    //     }
    // }

    // 팩토리얼 대신 5의 배수들의 개수를 차례로 계산 (2*5=10)
    let count = 0;

    while(n > 0) {
        // !n에서 5의 개수, 25의 개수, 125의 개수...
        n = Math.floor(n / 5);
        count += n;
    }

    return count;
};