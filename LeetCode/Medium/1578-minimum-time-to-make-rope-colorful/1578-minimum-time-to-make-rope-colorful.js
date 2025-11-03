/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
    let time = 0;
    let max = neededTime[0];

    for (let i = 1; i < colors.length; i++) {
        // 전 풍선 색과 같으면
        if (colors[i] === colors[i - 1]) {
            // 시간 더 작은 풍선 제거
            time += Math.min(neededTime[i], neededTime[i - 1]);
            // 시간 더 큰 풍선으로 max 갱신
            max = Math.max(neededTime[i], neededTime[i - 1]);
            // 전 풍선 색과 다르면 현재 풍선으로 max 갱신
        } else max = neededTime[i];
    }

    return time;
};