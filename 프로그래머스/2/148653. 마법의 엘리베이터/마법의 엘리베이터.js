function solution(storey) {
    // 최소 개수: dfs
    const visit = new Set();
    const que = [[storey, 0]];
    
    while(que.length) {
        // 큐의 원소 정렬(count가 적은 순으로)
        que.sort((a, b) => a[1] - b[1])
        const [num, count] = que.shift();
        
        // 이미 계산한적 있는 숫자면 패스
        if(visit.has(num)) continue;
        visit.add(num);        
        
        if(num === 0) {
            return count;
        }        
        
        // 10의 개수
        const first = Math.floor(num / 10);
        // 1의 개수
        const last = num % 10;
        
        // 10의 배수로 만들기
        // 1. 내림(뒷자리만큼 빼기)
        que.push([first, count + last]);
        // 2. 올림(10-뒷자리만큼 더하기)
        que.push([first + 1, count + (10 - last)]);
    }
}