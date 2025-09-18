function solution(n, computers) {
    let answer = 0;
    const visited = Array(n).fill(false);
    
    function findNetwork(index) {
        // 방문 처리
        visited[index] = true;
        
        computers[index].forEach((link, i) => {
            if(i !== index && !visited[i] && link === 1) {
                findNetwork(i);
            }
        });
    }
    
    // 방문하지 않은 각 컴퓨터마다 탐색 + 네트워크 수 증가
    computers.forEach((computer, i) => {
        if(!visited[i]) {
            findNetwork(i);
            answer++;
        }
    })
        
    return answer;
}