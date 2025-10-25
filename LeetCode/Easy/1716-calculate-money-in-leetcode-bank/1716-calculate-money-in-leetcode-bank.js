/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let sum = 0;
    let mon = 0;
    let prev = 0;

    for (let i = 1; i <= n; i++) {
        // 월요일이면 지난 월요일+1 더하고 지난 월요일 금액, 전날 금액 갱신
        if (i % 7 === 1) {
            sum += mon + 1;
            mon = mon + 1;
            prev = mon;
        } else {
            // 화~일요일이면 전날 금액+1 더하기
            prev += 1;
            sum += prev;
        }
    }

    return sum;
};