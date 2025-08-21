function solution(n, computers) {
    var answer = n;
    const visited = Array(n).fill(false);
    
    function dfs(computer) {
        // 연결 여부와 상관없이 방문 처리
        visited[computer] = true;                    
        computers[computer].forEach((link, i) => {
             if(i !== computer && link === 1 && !visited[i]) {
                 answer--;
                 dfs(i);
             }
         });
    }
    
    // 각 컴퓨터에서 탐색 시작
    computers.forEach((computer, i) => {
        if(!visited[i]) {
            dfs(i);
            
        }
    });
        
    return answer;
}