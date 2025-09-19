function solution(priorities, location) {
//     let count = 0;
//     // 각 프로세스의 번호와 우선순위를 나타내는 객체 배열
//     const processes = priorities.map((priority, i) => 
//         {return {index: i, priority: priority}}
//     );
    
//     while(processes.length > 0) {
//         // 프로세스 꺼내기
//         let currentProcess = processes.shift();
//         // 남은 우선순위 중 하나라도 현재 프로세스의 우선순위보다 클 경우 다시 넣기
//         if(processes.some((process) => process.priority > currentProcess.priority)) {
//            processes.push(currentProcess);
//             // 더 높은 우선순위가 없다면 실행 후 순서 증가
//            } else {
//                count++;
//                // 방금 실행된 프로세스 번호가 해당 프로세스 번호일 경우 반복문 종료
//                if(currentProcess.index === location) {
//                    break;
//                }
//            }
//     }
    
    const queue = Array.from({length: priorities.length}, (_, i) => i);
    const obj = {};
    let count = 0;

    // 프로세스별 우선순위 객체에 넣기
    queue.forEach((process, i) => {
        obj[process] = priorities[i];
    });
   
    while(queue.length) {
        // 1. 큐에서 프로세스 꺼내기
        const first = queue.shift();
        // 2. 우선순위 체크: 더 높은 프로세스 있으면 다시 큐에 넣기
        if(queue.some((process) => obj[process] > obj[first])) {
            queue.push(first);
        } else {
            // 3. 없다면 프로세스 실행 -> 종료
            count++;
            // 방금 실행한 프로세스가 알고 싶은 프로세스면 반환
            if(first === location) return count;
        }
    }
}