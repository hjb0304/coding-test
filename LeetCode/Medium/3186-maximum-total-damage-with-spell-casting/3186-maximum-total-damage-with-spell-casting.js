/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function(power) {
    // 각 데미지의 총합 구하기
    const map = new Map();
    for(let damage of power) {
        map.set(damage, (map.get(damage) || 0) + damage);
    }

    // 데미지 중복 없이 오름차순으로 정리
    const damages = [...map.keys()].sort((a, b) => a - b);

    // damages[i]까지 사용했을 때 최대 데미지
    const dp = Array(damages.length).fill(0);
    dp[0] = map.get(damages[0]);

    // dp 채우기
    for(let i = 1; i < damages.length; i++) {
        let sum = map.get(damages[i]);
        let j = i - 1;

        // 둘의 차이가 2보다 커질 때까지 j 감소
        while(j >= 0 && damages[i] - damages[j] <= 2) j--;

        // damages[i]의 총합에 damages[j]까지의 최대 합 더하기
        if(j >= 0) sum += dp[j];

        // i를 포함하지 않은 합과 i 포함한 합 중 큰 것을 할당 
        dp[i] = Math.max(dp[i - 1], sum);
    }

    // 마지막 데미지까지 포함한 최대 합
    return dp[damages.length - 1];
};