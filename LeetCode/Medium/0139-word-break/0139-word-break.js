/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    // 단어 시작 가능한 위치 표시
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;
    const set = new Set(wordDict);

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            // 시작 가능한 위치이고 단어가 사전에 존재하면 다음 시작 위치로 표시
            if (dp[j] && set.has(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
};