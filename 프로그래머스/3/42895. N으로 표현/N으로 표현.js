function solution(N, number) {
    if(N === number) return 1;
    const dp = Array.from({length : 9}, () => new Set());
    
    for(let i = 1; i <= 8; i++) {
        // 각 숫자의 배열에 N을 i개 붙인 숫자 넣기
        dp[i].add(Number(String(N).repeat(i)));
        // i의 경우의 수를 j + i-j의 조합으로 나누어 구하기
        for(let j = 1; j < i; j++) {
            for(let k of dp[j]) {
                for(let l of dp [i - j]) {
                    dp[i].add(k + l);
                    dp[i].add(k - l);
                    dp[i].add(k * l);
                    // 0으로 나누면 Infinity가 되므로 제외
                    if(l !== 0) dp[i].add(Math.floor(k / l));
                }
            }
            
            // number가 있으면 반환
            if(dp[i].has(number)) return i;
        }
    }
    
    return -1;
}