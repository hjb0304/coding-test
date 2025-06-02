function solution(priorities, location) {
    let count = 0;
    // 각 프로세스의 중요도를 나타내는 객체
    const processes = {};
    
    priorities.forEach((priority, i) => {
        processes[i] = priority;
    })
    
    // 각 프로세스 배열
    const processArr = Object.keys(processes);
    // 우선순위를 구할 프로세스
    const answerProcess = processArr[location];
    // 우선순위 큰 순서대로 정렬
    priorities.sort((a, b) => b - a);
    
    while(processArr.length > 0) {
        // 프로세스 꺼내기
        let currentProcess = processArr.shift();
        // 우선순위의 최댓값이 현재 프로세스의 우선순위보다 높을 경우 다시 넣기
        if(priorities[0] > processes[currentProcess]) {
           processArr.push(currentProcess);
            // 더 높은 우선순위가 없다면 실행 후 순서 증가
           } else {
               priorities.shift();
               count++;
               // 방금 실행된 프로세스가 해당 프로세스일 경우 반복문 종료
               if(currentProcess === answerProcess) {
                   break;
               }
           }
    }
    return count;
}