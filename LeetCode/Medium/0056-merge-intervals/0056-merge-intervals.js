/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const answer = [];

    intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0];

    for(let i = 1; i < intervals.length; i++) {
        // 겹치는 배열이면 합치기
        if(prev[1] >= intervals[i][0]) {
            prev = [prev[0], Math.max(prev[1], intervals[i][1])];
        } else {
            // 겹치지 않으면 이전 요소 push
            answer.push(prev);
            prev = intervals[i];
        }
    }

    // 마지막 요소 push
    answer.push(prev);

    return answer;
};