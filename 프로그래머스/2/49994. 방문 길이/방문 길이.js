function solution(dirs) {
    var answer = 0;
    let location = [0, 0];
    // 모든 이동의 경우의 수 Set
    const visit = new Set();
    
const direction = {U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0]};
    
    for(let i = 0; i < dirs.length; i++) {
        // 현재 위치
        let [a, b] = location;
        let move = dirs[i];
        // 이동할 거리
        const [x, y] = direction[move];
        // 범위를 벗어나지 않는다면 이동
        if(a + x >= -5 && a + x <= 5 && b + y >= -5 && b + y <= 5) {
            // 이동한 위치
            location = [a + x, b + y];
        // 방문한 적 없다면 방문 길이 증가, 방문 전+방문 후 좌표 문자열로 만들어 Set에 추가
        if(!visit.has(`${a},${b},${location[0]},${location[1]}`) && !visit.has(`${location[0]},${location[1]},${a},${b}`)) {
            answer++;
            visit.add(`${a},${b},${location[0]},${location[1]}`);    
        }    
    }
    }
    return answer;
}