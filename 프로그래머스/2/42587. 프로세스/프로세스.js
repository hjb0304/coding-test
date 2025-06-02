function solution(priorities, location) {
    let count = 0;
    // 각 프로세스의 번호와 우선순위를 나타내는 객체 배열
    const processes = [];
    
    // 프로세스 번호와 중요도 넣기 
    priorities.forEach((priority, i) => {
        processes[i] = {index: i, priority: priority};
    });
    
    while(processes.length > 0) {
        // 프로세스 꺼내기
        let currentProcess = processes.shift();
        // 남은 우선순위 중 하나라도 현재 프로세스의 우선순위보다 클 경우 다시 넣기
        if(processes.some((process) => process.priority > currentProcess.priority)) {
           processes.push(currentProcess);
            // 더 높은 우선순위가 없다면 실행 후 순서 증가
           } else {
               count++;
               // 방금 실행된 프로세스 번호가 해당 프로세스 번호일 경우 반복문 종료
               if(currentProcess.index === location) {
                   break;
               }
           }
    }
    return count;
}