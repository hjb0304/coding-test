function solution(n, wires) {
    var answer = n;
    const connect = {};
    
    // 각 연결 상태 객체에 넣기
    for(let i = 1; i <= n; i++) {
        connect[i] = [];  
    }    
    for(wire of wires) {
        const [a, b] = wire;   
        connect[a].push(b);
        connect[b].push(a);
    }
    
    // 잘랐을 때 가장 개수가 비슷한 송전탑 구하기    
    function dfs(start, a, b, visited) {
        visited[start - 1] = true; 
        // 자기 자신
        let count = 1;
        
        for(let item of connect[start]) { 
            // 자른 간선의 경우 무시
            if(start === a && item === b || start === b && item === a) continue;
            if(!visited[item - 1]) {
                // 자식이 리턴한 값을 누적
                count += dfs(item, a, b, visited);
            }
        }       
        return count;
    }    
    
    // 하나씩 잘라보기
    
    for(let wire of wires) {
        const [a, b] = wire;
        const visited = Array(n).fill(false);
        let count = dfs(1, a, b, visited);
        if (Math.abs(n - count - count) < answer) {
                answer = Math.abs(n - count - count);
        };
    }
    
    return answer;
}