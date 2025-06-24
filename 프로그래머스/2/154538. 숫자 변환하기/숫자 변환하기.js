function solution(x, y, n) {
    // 현재 숫자와 연산 횟수를 담은 큐
    const que = [[y, 0]];
    // 연산했던 숫자들을 담은 Set
    const visit = new Set();
    
    while(que.length) {
        // 첫번째 요소 꺼내기
        const [number, count] = que.shift();
        // 숫자가 x가 되면 연산 횟수 반환
        if(number === x) {
            return count;
        }
        
        // 숫자를 연산한 적 없으면 계속 진행
        if(!visit.has(number)) {
            // 연산한 숫자 배열에 추가
            visit.add(number);
            // 연산을 순서대로 진행해 x보다 크면 그 결과와 1 증가시킨 횟수를 큐에 넣기
            if(number - n >= x) que.push([number - n, count + 1]);
            // 나눗셈의 경우 나눠떨어질 경우에만 큐에 넣기
            if(number / 2 >= x && !(number % 2)) que.push([number / 2, count + 1]);
            if(number / 3 >= x && !(number % 3)) que.push([number / 3, count + 1]);
        }
    }
    
    // 횟수가 반환되지 않았다면 -1
    return -1;
//     var answer = Infinity;
//     // 계산했던 숫자 목록
//     const visit = new Map();
    
//     // 시간 초과로 인해 y => x 역방향으로 계산
//     function dfs(count, sum) {
//         // x가 되면 기존 횟수보다 더 작은 횟수를 할당
//         if(sum === x) {
//             answer = Math.min(count, answer);
//             return;
//             // x보다 작아지거나 정수가 아니거나 count가 이미 구한 count들보다 크면 함수 종료
//         } else if(sum < x || !Number.isInteger(sum) || count >= answer) {
//             return;
//             // 계산한 적 없는 숫자거나 count가 더 크면 횟수 증가 후 visit 배열에 숫자 넣고 재귀함수 차례로 호출
//         } else if(!visit.has(sum) || visit.get(sum) > count){
//             visit.set(sum, count);
            
//         dfs(count + 1, sum - n);
//         dfs(count + 1, sum / 2);
//         dfs(count + 1, sum / 3);
//     }
//     }
//     dfs(0, y);
    
//     return answer !== Infinity ? answer : -1;
}