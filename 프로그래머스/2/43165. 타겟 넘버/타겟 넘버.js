function solution(numbers, target) {
    var answer = 0;
    
    function makeNumber(length, sum) {
        // length가 숫자 개수와 같고 sum이 target과 같아지면 경우의 수 증가
        if(length === numbers.length && sum === target) answer++;
        
        // 빼는 경우, 더하는 경우
        if(length < numbers.length) {
            makeNumber(length + 1, sum - numbers[length]);
            makeNumber(length + 1, sum + numbers[length]);
        }
    }
    
    makeNumber(0, 0);
    
    return answer;
}