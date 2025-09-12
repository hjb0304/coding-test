function solution(n, times) {
    let right = Math.max(...times) * n;
    let left = Math.min(...times);
    
    
    while(left <= right) {
        let mid = Math.floor((right + left) / 2);
        
        // 총 시간 동안 각 심사관이 심사할 수 있는 사람의 수 총합 구하기
        const people = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
        
        if(people < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    
    return left;
}