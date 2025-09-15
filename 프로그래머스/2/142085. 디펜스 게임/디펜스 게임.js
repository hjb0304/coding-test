function solution(n, k, enemy) {
    let [left, right] = [0, enemy.length];
    let mid = Math.floor((left + right) / 2);

    while (left <= right) {
        const round = enemy.slice(0, mid).sort((a, b) => b - a);
        let fever = k;
        const remain = round.reduce((acc, val) => {
            if (fever > 0) {
                fever--;
                return acc;
            } else return acc + val
        }, 0);
        // console.log(round, fever, remain, mid)
        if (n - remain >= 0 && fever >= 0) left = mid + 1;
        else right = mid - 1;
        mid = Math.floor((left + right) / 2);
    }

    return left - 1;
}
// function solution(n, k, enemy) {
//     // 받은 공격 누적
//     let sum = 0;
//     // 지금까지 마주친 적을 저장
//     const heap = [];
    
//     // target을 삽입할 위치(내림차순)를 탐색
//     function binarySearch(arr, target) {
//         let left = 0;
//         let right = arr.length;
        
//         while(left < right) {
//             let mid = Math.floor((left + right) / 2);
//             if(arr[mid] < target) {
//                 right = mid;
//             } else left = mid + 1;
//         }
//         return left;
//     }
    
//     for(let i = 0; i < enemy.length; i++) {
//         // 시간 초과로 sort() 대신 이진탐색 사용
//         const position = binarySearch(heap, enemy[i]);
//         // 적절한 위치에 새 적 삽입
//         heap.splice(position, 0, enemy[i]);
        
//         sum += enemy[i];
        
//         // 병력이 부족하고 무적권이 남아있으면 가장 큰 적에게 무적권 사용
//         if(sum > n && k > 0) {
//             sum -= heap.shift();
//             k--;
//         }
        
//         // 공격 막기 실패 시 라운드 반환
//         if(sum > n) {
//             return i;
//         }
        
//     }
//     // 모든 라운드 성공
//     return enemy.length;
// }