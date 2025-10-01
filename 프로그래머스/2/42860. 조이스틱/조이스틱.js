function solution(name) {
    let answer = 0;
    
    // BFS 시간초과 -> 그리디
    
    // 알파벳으로 이동 횟수
    for(let i = 0; i < name.length; i++) {
        const diff = name.charCodeAt(i) - 'A'.charCodeAt(0);
        // 뒤로 이동, 앞으로 이동 중 작은 숫자 선택
        answer += Math.min(diff, 26 - diff);
    }
    
    // 커서 이동 최소화
    // 최대 이동 횟수
    let move = name.length - 1;
    
    // 되돌아가기 전 위치에 따라 최소 이동 횟수 구하기
    for(let i = 0; i < name.length; i++) {
        let next = i + 1;
        // A가 아닌 요소를 찾을 때까지 next 증가
        while(next < name.length && name[next] === 'A') {
            next++;
        }
        // 최대 이동 횟수, 앞부분 처리->뒷부분 처리 시 횟수, 뒷부분 처리->앞부분 처리 시 횟수 중 최소 선택
        move = Math.min(move, i * 2 + name.length - next, (name.length - next) * 2 + i);
    }
    // B B A A B B
    
    return answer + move;
}