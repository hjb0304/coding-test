function solution(progresses, speeds) {
     const answer = [];

//   progresses = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));

//   while (progresses.length) {
//     const first = progresses.shift();
//     let sum = 1;

//     progresses = progresses.map((progress) => progress - first);

//     while (progresses[0] <= 0) {
//       progresses.shift();
//       sum++;
//     }
//     answer.push(sum);
//   }
    
    // 작업별 배포까지 남은 일수 구하기 
    let days = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    
    while(days.length) {
        let count = 0;
        // 첫번째 작업 배포될 때까지 작업 후 제거
        const first = days.shift();
        days = days.map(day => day - first);
        
        // 나머지 작업들 순서대로 완료 여부 확인 후 제거
        while(days[0] <= 0) {
            days.shift();
            count++;
        }
        
        answer.push(count + 1);
    }
    
  return answer;
}