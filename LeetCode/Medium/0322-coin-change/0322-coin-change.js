/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // 특정 수를 만들 수 있는 동전의 최소 개수
    const dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    // 모든 동전에 대해 실행
    for(let i = 0; i < coins.length; i++) {
        for(let j = coins[i]; j < amount + 1; j++) {
            // j의 동전 최소 개수와 j-동전 금액의 동전 최소 개수+1 중 작은 것 선택
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
        }
    }

    return dp[amount] === amount + 1 ? -1 : dp[amount];
};