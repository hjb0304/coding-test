/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 각각의 계단에 도착할 수 있는 경우의 수
    const ways = Array(n).fill(0);
    ways[0] = 1;
    ways[1] = 2;

    for(let i = 2; i < n; i++) {
        // i-2번째 계단에서 가는 방법(+2칸), i-1번째 계단에서 가는 방법(+1칸)
        ways[i] = ways[i - 2] + ways[i - 1];
    }

    return ways[n - 1];
};