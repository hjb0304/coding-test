function solution(players, m, k) {
    var answer = 0;
    // 각 서버의 지속 시간 저장 
    const que = [];
    
    for(let player of players) {
        // 필요한 서버의 수
        const count = Math.floor(player / m);
        // 서버 수가 모자라다면 그만큼 증설
        while(que.length < count) {
            que.push(0);
            answer++;
        }
        // 서버 지속 시간 증가
        for(let i = 0; i < que.length; i++) {
            que[i]++;
        }
        //  서버 지속 시간이 k가 되면 반납
            while(que[0] === k) {
                que.shift();
            }        
    }
    
    return answer;
}