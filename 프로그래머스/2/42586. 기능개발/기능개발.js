function solution(progresses, speeds) {
//     var answer = [];
    
//     // 기능이 하나도 남지 않을 때까지 반복
//     while(progresses.length) {
//         let count = 0;
//         // 첫번째 작업이 끝날 때까지 남은 일수
//         let day = Math.ceil((100 - progresses[0]) / speeds[0]); 
//         // 목록에서 제거 후 개수 증가
//         progresses.shift();
//         speeds.shift();
//         count++;
//         // 남은 작업들이 끝났는지 확인
//         progresses = progresses.map((progress, i) => (progress + day * speeds[i]));

//         while(progresses.length) {
//             // 끝났다면 제거 후 개수 증가
//             if(progresses[0] >= 100) {
//                 progresses.shift();
//                 speeds.shift();
//                 count++;
//             } else {
//                 break;
//             }
//         }
//         answer.push(count);
//     }
    
//     return answer;
      const answer = [];

  progresses = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));

  while (progresses.length) {
    const first = progresses.shift();
    let sum = 1;

    progresses = progresses.map((progress) => progress - first);

    while (progresses[0] <= 0) {
      progresses.shift();
      sum++;
    }
    answer.push(sum);
  }

  return answer;
}