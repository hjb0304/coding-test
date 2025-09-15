function solution(N, road, K) {
    // 마을까지의 거리를 담은 객체
    var answer =  Array(N).fill(Infinity);
    // 마을과 마을의 최단 거리를 나타내는 객체
    const connect = {};
    
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
    
    answer[0] = 0;
    
    function dfs(start, count) {
        answer[start - 1] = count;
        
        for(arr of connect[start]) {
            const [b, time] = arr;
            // 총 시간이 현재 기록된 시간보다 적을 경우 갱신
            if(count + time <= answer[b - 1]) {
                dfs(b, count + time);
            }
        }
    }
    
    dfs(1, 0);

    return answer.filter(i => i <= K).length;
}