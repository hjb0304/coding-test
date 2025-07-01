function solution(queue1, queue2) {
    // 큐 시뮬레이션 (index로 큐 구현)
    let count = 0;
    const arr = [...queue1, ...queue2];
    let sum1 = queue1.reduce((acc, cur) => acc + cur);
    let sum2= queue2.reduce((acc, cur) => acc + cur);
    let sum = (sum1 + sum2) / 2;
    
    let i = 0;
    let j = queue1.length;
    
    while(count <= queue1.length * 3) {
        // j가 배열 끝 index까지 증가하면 실패
        if(j >= arr.length) return -1;
        // 절반의 합이 목표보다 작은 경우
        if(sum1 < sum) {
            // q2 -> q1 맨앞 요소 넘겨줌
            sum1 += arr[j];
            sum2 -= arr[j];
            j++;            

        // 절반의 합이 목표보다 큰 경우
        } else if (sum1 > sum) {
            // q1 -> q2 맨앞 요소 넘겨줌
            sum1 -= arr[i];
            sum2 += arr[i];
            i++;
        } else {
            return count;
        }
        count++;
    }
    
    return -1;
    
//     let sum = 0;
//     let count = 0;
    
//     // 원소의 합 / 2 구하기
//     for(let i = 0; i < queue1.length; i++) {
//         sum += queue1[i] + queue2[i];
//     }
    
//     sum = sum / 2;
    
    // 두 큐를 합쳐 투포인터로 해결 (시간 초과)
//     const arr = [...queue1, ...queue2];
//     let left = 0;
//     let right = queue1.length - 1;
    
//     while(count < arr.length) {
//     let sum2 = 0;

//     for(let i = left; i <= right; i++) {
//         sum2 += arr[i];
//     }
    
//     if(sum2 > sum) {
//         left++;
//     } else if(sum2 < sum){
//         right++;
//     } else {
//         return count;
//     }
//         count++;
//     }    
    
    // return -1;
}