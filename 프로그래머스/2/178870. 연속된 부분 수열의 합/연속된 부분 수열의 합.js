function solution(sequence, k) {
    let answer = [];
    let length = Infinity;
    // 정수의 누적합 배열
    const arr = [0];
    sequence.forEach((i, idx) => {arr.push(i + arr[idx]);}
    )
    
    // 수열의 합: 누적합에서 앞의 누적합을 빼는 것과 같음
    let left = 0;
    let right = 0;
    
    // 투포인터로 길이가 짧은 수열 구하기
    while(left <= right && right <= arr.length - 1) {
        if(arr[right] - arr[left] === k) {
            // 기존 수열보다 길이가 짧으면 교체
            if(right - left < length) {
                length = right - left;
                answer = [left, right - 1];
            }
                // 다음 구간 확인
                right++;
        } else if(arr[right] - arr[left] < k) {
            right++;
        } else {
            left++;
        }
    }
    
    
    return answer;
    
    // for문 + while문으로 시간초과
//     var answer = [];
//     sequence = sequence.filter(i => i <= k);
    
//     for(let i = 0; i < sequence.length; i++) {
//         if(sequence[i] === k) {
//             return [sequence.indexOf(sequence[i]), sequence.indexOf(sequence[i])];
//             break;
//         }
//         let sum = sequence[i];
//         let idx = i + 1;
//         let count = 1;
//         while(sum < k) {
//             sum += sequence[idx];
//             idx++;
//             count++;
//         }
//         if(sum === k) {
//             if(answer.length === 0 || count <= answer[answer.length - 1] )
//             answer.push([count, i, i + count - 1])};
//     }
    
//     return [answer[0][1], answer[0][2]];
}