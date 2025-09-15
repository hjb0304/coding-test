function solution(numbers) {
    var answer = Array(numbers.length).fill(-1);
    // 뒤에서부터 구하기
    for(let i = numbers.length - 1; i >= 0; i--) {
        // 뒷 큰수 구하기
        for(let j = i + 1; j < numbers.length; j++) {
            // 뒷수가 더 클 경우 뒷 큰수 배열에 넣기
            if(numbers[j] > numbers[i]) {
                answer[i] = numbers[j];
                break;
                // 뒷수가 더 작거나 같을 경우 
            } else {
                // 뒷 큰수가 없다면 i도 뒷 큰수 없음
                if(answer[j] === -1) {
                    answer[i] = -1;
                    break;
                    // i와 j가 같다면 j의 뒷 큰수가 i의 뒷 큰수
                } if(numbers[j] === numbers[i]) {
                    answer[i] = answer[j];
                    break;
                    
                }
            }
        }
    }
    
    return answer;
}