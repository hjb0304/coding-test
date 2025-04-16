function solution(n) {
    // 더하는 수와 더해지는 수
    let first = 0;
    let second = 1;
    let sum = 0;
    
    for(let i = 2; i <= n; i++) {
        // i번째 피보나치 수
        sum = first + second;
        if(sum >= 1234567) {
            sum %= 1234567;
        }
        // 한 칸씩 앞으로 당김
        first = second;
        second = sum;
    }
    
    return sum % 1234567;
}