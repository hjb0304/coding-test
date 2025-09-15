function solution(land) {
    let answer = 0;

    // DP: 이전 행에서 각 열을 제외한 다른 열들에서 최댓값을 찾아 더해줌
    for(let i = 1; i < land.length; i++) {
        land[i][0] += Math.max(land[i-1][1], land[i-1][2], land[i-1][3]);
        land[i][1] += Math.max(land[i-1][0], land[i-1][2], land[i-1][3]);
        land[i][2] += Math.max(land[i-1][0], land[i-1][1], land[i-1][3]);
        land[i][3] += Math.max(land[i-1][0], land[i-1][1], land[i-1][2]);
    }

    // 누적된 값의 최댓값 찾기
    return Math.max(...land[land.length - 1]);
}