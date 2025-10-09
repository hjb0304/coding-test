/**
 * @param {number[]} skill
 * @param {number[]} mana
 * @return {number}
 */
var minTime = function(skill, mana) {
    const n = skill.length;
    const m = mana.length;
    const done = Array(n + 1).fill(0);

    // 포션별 완료 시간 구하기
    for(let j = 0; j < m; j++) {
        // j번째 포션을 끝낸 시각
        for(let i = 0; i < n; i++) {
            // j-1번째 포션을 i번째 마법사가 끝낸 시간과 j번째 포션을 i-1번째 마법사가 끝낸 시간 중 더 나중 시간에서 시작 
            done[i + 1] = Math.max(done[i + 1], done[i]) + skill[i] * mana[j];
        }
        // j번째 포션을 시작하기 전 시각
        for(let i = n - 1; i >= 0; i--) {
            done[i] = done[i + 1] - skill[i] * mana[j];
        }
    }

    return done[n];
};