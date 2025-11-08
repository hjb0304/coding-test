/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // 새 배열 집어넣고 오름차순 정렬
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for(let i = 0; i < intervals.length; i++) {
        const last = result[result.length - 1];
        const cur = intervals[i];

        // 배열을 합쳐야 할 경우 2번째 숫자를 변경
        if(last[1] >= cur[0]) {
            result[result.length - 1][1] = Math.max(last[1], cur[1]);
        } else result.push(cur);
    }

    return result;
};