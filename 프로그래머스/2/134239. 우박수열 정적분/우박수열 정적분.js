function solution(k, ranges) {
    var answer = [];
    const result = [k];
    
    // 꺾은선 그래프 y좌표 구하기
    while(k > 1) {
        if(k % 2) {
            k = k * 3 + 1;
        } else {
            k /= 2;
        }
        result.push(k);
    }
    
    // 각 범위의 넓이 구하기
    for(let range of ranges) {
        let [start, end] = [range[0], result.length - (-range[1]) - 1];
        if(start > end) {answer.push(-1); continue;}
        if(start === end) {answer.push(0); continue;}
        let sum = 0;
        for(let i = start; i < end; i++) {
            // 사각형 넓이 + 삼각형 넓이
            sum += Math.min(result[i], result[i + 1]) + Math.abs(result[i + 1] - result[i]) * 0.5; 
        }
        answer.push(sum);
    }
    
    return answer;
}