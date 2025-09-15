function solution(maps) {
    const n = maps.length - 1;
    const m = maps[0].length - 1;
    // 각 이동 거리 (상하좌우)
    const move = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    // 순서대로 방문할 칸들의 좌표와 이동한 칸의 개수
    const queue = [[0, 0, 1]];
    
    while(queue.length) {
        // 맨앞에 있는 칸부터 방문
        const [y, x, answer] = queue.shift();
        // 진영에 도착했다면 칸의 개수 반환
        if (y === n && x === m) return answer;
        
        // 상하좌우 모두 움직여보기
        for (let direction of move) {
            const [movey, movex] = [y + direction[0], x + direction[1]];
        // 해당 칸에 벽이 없고 방문한 적 없는 자리일 경우 (칸을 벗어나지 않음)
            if (movey >= 0 && movex >= 0 && movey <= n && movex <= m && maps[movey][movex] === 1) {
                // 방문할 칸들의 배열에 추가
                queue.push([movey, movex, answer + 1])
                // 방문 처리
                maps[movey][movex] = 0;
            }
        }
                
    }
    // 움직일 칸이 없을 경우 -1 반환
return -1;
}