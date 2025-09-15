function solution(triangle) {
    for(let i = 1; i < triangle.length; i++) {
        for(let j = 0; j < triangle[i].length; j++) {
            // 각 줄의 첫번째 숫자 누적
            if(j === 0) {
                triangle[i][j] += triangle[i - 1][j];
                // 각 줄의 마지막 숫자 누적
            } else if(j === triangle[i].length - 1) {
                triangle[i][j] += triangle[i - 1][j - 1];
                // 나머지 경우: 윗 줄 2개 중 큰 숫자 누적
            } else {
                triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
            }
        }
    }
    
    // 마지막 줄에서 가장 큰 숫자
    return Math.max(...triangle[triangle.length - 1]);
}