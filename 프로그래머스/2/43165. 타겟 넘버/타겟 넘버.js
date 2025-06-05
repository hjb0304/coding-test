function solution(numbers, target) {
    var answer = 0;
    
    function makeNumber(i, current) {
        // 모든 수를 다 더한 합이 target과 같으면 방법 수 증가
        if(i === numbers.length && current === target) {
            answer++;
        }
        // +,- 둘중 하나를 선택해 합에 더하거나 빼줌
        if(i < numbers.length) {
                makeNumber(i + 1, current + numbers[i]);
                makeNumber(i + 1, current - numbers[i]);
            }
    }
    
    makeNumber(0, 0);
    
    return answer;
}