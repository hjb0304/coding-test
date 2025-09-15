function solution(k, dungeons) {
    let answer = 0;
    // 경우별 던전 방문 여부 배열
    const visit = Array(dungeons.length).fill(false);
    
    function explore(currentK, count) {
            answer = Math.max(answer, count);
        
        for(let i = 0; i < dungeons.length; i++) {
            const [min, spend] = dungeons[i];
            // 방문 가능한 경우
            if(currentK >= min && !visit[i]) {
                // 방문 표시
                visit[i] = true;
                // 다음 던전 방문
                explore(currentK - spend, count + 1);
                // 백트래킹: 다른 던전을 방문할 경우
                visit[i] = false;
             } 
        };}
    
    explore(k, 0);

    return answer;
}