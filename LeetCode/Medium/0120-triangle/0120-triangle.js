/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    for(let i = 1; i < triangle.length; i++) {
        for(let j = 0; j < triangle[i].length; j++) {
            if(i === 1) {
                triangle[i][j] += triangle[0][0];
                continue;
            }
            if(j === 0) {
                triangle[i][j] += triangle[i - 1][j];
                continue;
            }
            if(j === triangle[i].length - 1) {
                triangle[i][j] += triangle[i - 1][j - 1];
                continue;
            }
            // 윗줄 j와 j-1번째 중 더 작은 숫자 선택 후 누적
            const min = Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
            triangle[i][j] += min;
        }
    }

    return Math.min(...triangle[triangle.length - 1]);
};