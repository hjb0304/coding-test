/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    for(let i = 1; i < triangle.length; i++) {
        for(let j = 0; j < triangle[i].length; j++) {
            // 두번째 행의 경우 첫번째 숫자 누적
            if(i === 1) {
                triangle[i][j] += triangle[0][0];
                continue;
            }
            // 첫번째 열의 경우 윗줄 첫번째 열 숫자 누적
            if(j === 0) {
                triangle[i][j] += triangle[i - 1][j];
                continue;
            }
            // 마지막 열의 경우 윗줄 마지막 열 숫자 누적
            if(j === triangle[i].length - 1) {
                triangle[i][j] += triangle[i - 1][j - 1];
                continue;
            }
            // 윗줄 j와 j-1번째 중 더 작은 숫자 선택 후 누적
            const min = Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
            triangle[i][j] += min;
        }
    }

    // 맨 밑줄에서 가장 작은 수 반환
    return Math.min(...triangle[triangle.length - 1]);
};