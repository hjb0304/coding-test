/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let max = 0;

    // 세 점의 모든 경우의 수 구하기
    for(let i = 0; i < points.length; i++) {
        for(let j = i + 1; j < points.length; j++) {
            for(let k = j + 1; k < points.length; k++) {
                const [x1, y1] = points[i];
                const [x2, y2] = points[j];
                const [x3, y3] = points[k];

                // 전체 사각형 넓이 공식: |x1(y2-y3)+x2(y1-y3)+x3(y1-y2)|*0.5
                const area = Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) * 0.5;

                max = Math.max(max, area);
            } 
        }
    }

    return max;
};