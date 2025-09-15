function solution(A,B){
    let answer = 0;
    
    // A와 B를 오름차순, 내림차순으로 정렬
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    
    // A는 작은 숫자부터, B는 큰 숫자부터 뽑아서 곱함
    A.forEach((num, i) => {
        answer += num * B[i];
    });
    
    return answer;
}