function solution(N, road, K) {
    // 배달 가능한 마을들을 담은 Set
    var answer = new Set();
    // 마을과 마을의 최단 거리를 나타내는 객체
    const connect = {};
    const visited = Array(N).fill(false);
    
    for(let arr of road) {
        const [a, b, time] = arr;
        if(connect[a]) {
            // a-b 도로가 이미 있을 경우
            const idx = connect[a].findIndex(i => i[0] === b);
            if(idx !== -1) {
                // 걸리는 시간이 time보다 크면 time으로 교체
                connect[a][idx][1] = connect[a][idx][1] > time ? time : connect[a][idx][1];
            } else {
            connect[a].push([b, time]);}
        } else {
            connect[a] = [[b, time]];
        }
        
        if(connect[b]) {
            // a-b 도로가 이미 있을 경우
            const idx2 = connect[b].findIndex(i => i[0] === a);
            if(idx2 !== -1) {
                // 걸리는 시간이 time보다 크면 time으로 교체
                connect[b][idx2][1] = connect[b][idx2][1] > time ? time : connect[b][idx2][1];
            } else {
            connect[b].push([a, time]);}
        } else {
            connect[b] = [[a, time]];
        }        
    }
    
    function dfs(start, count) {
        visited[start - 1] = true;
        if(!answer.has(start)) answer.add(start);
        
        for(arr of connect[start]) {
            const [b, time] = arr;
            if(count + time <= K && !visited[b - 1]) {
                visited[b - 1] = true;
                dfs(b, count + time);
                visited[b - 1] = false;
            }
        }
    }
    
    dfs(1, 0);

    return answer.size;
}