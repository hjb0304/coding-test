function solution(tickets) {
    let answer = [];
    const visited = Array(tickets.length).fill(false);
    tickets.sort();
    
    function dfs(route) {
        // 만든 루트가 티켓 수 + 1이면 완성
        if(tickets.length + 1 === route.length) {answer.push(route); return;}

        // 모든 티켓을 사용해야 함
        tickets.forEach((ticket, i) => {
            const [dep, arr] = ticket;
            if(dep === route[route.length - 1] && !visited[i]) {
                visited[i] = true;
                dfs([...route, arr]);
                // 잘못된 경로일 경우 백트래킹
                visited[i] = false;
            }
        });
    }
    
    dfs(['ICN']);

  return answer[0];
}